import fs from 'fs';
import moment from 'moment';

let listultah = {};

const handler = async (m, { conn, command, text, groupMetadata }) => {
    let who = groupMetadata.id;
    let note = listultah[who] || [];

    if (command === 'ultahku') {
        let [name, date] = text.split(':');
        if (!name || !date) {
            conn.reply(m.chat, 'Format input salah. Masukkan data dengan format: Nama: TANGGAL LAHIR (DD/MM/YYYY)', m);
            return;
        }

        let number = m.sender.split("@")[0];
        let birthday = moment(date.trim(), 'DD/MM/YYYY');
        let now = moment();
        let nextBirthday = moment(birthday).year(now.year()); // Ambil ulang tahun pada tahun ini
        if (nextBirthday.isBefore(now) || nextBirthday.isSame(now, 'day')) {
            nextBirthday.add(1, 'year');
        }
        let age = now.diff(birthday, 'years');
        let daysLeft = nextBirthday.diff(now, 'days');

        let data = `${name.trim()}:${birthday.format('DD/MM/YYYY').trim()}:${number}`;

        // Periksa apakah data yang sama sudah ada
        if (note.find(n => n.split(':')[0].toLowerCase() === name.toLowerCase())) {
            conn.reply(m.chat, 'Data sudah ada dalam list.', m);
            return;
        }

        note.push(data);
        listultah[who] = note;
        fs.writeFileSync('listultah.json', JSON.stringify(listultah, null, 2));

        conn.reply(m.chat, `Catatan berhasil ditambahkan, @${number}!`, m);
    } else if (command === 'hapusultah') {
        if (!text) {
            conn.reply(m.chat, 'Silakan masukkan nomor catatan yang ingin dihapus.', m);
            return;
        }
        let index = parseInt(text) - 1;
        if (index < 0 || index >= note.length) {
            conn.reply(m.chat, 'Nomor catatan tidak valid.', m);
            return;
        }
        note.splice(index, 1);
        listultah[who] = note;
        fs.writeFileSync('listultah.json', JSON.stringify(listultah, null, 2));
        conn.reply(m.chat, 'Catatan berhasil dihapus!', m);
    } else if (command === 'listultah') {
        if (note.length === 0) {
            conn.reply(m.chat, 'Belum ada catatan. Gunakan perintah *ultahku* untuk menambahkan.', m);
            return;
        }
        let message = '*list ultah ✨💫*:\n';
        for (let i = 0; i < note.length; i++) {
            let [name, date, number] = note[i].split(':');
            if (!name || !date || !number) continue;
            let birthday = moment(date.trim(), 'DD/MM/YYYY');
            let now = moment();
            let nextBirthday = moment(birthday).year(now.year()); // Ambil ulang tahun pada tahun ini
            if (nextBirthday.isBefore(now) || nextBirthday.isSame(now, 'day')) {
                nextBirthday.add(1, 'year');
            }
            let age = now.diff(birthday, 'years');
            let daysLeft = nextBirthday.diff(now, 'days');

            // Tampilkan hasil dengan perhitungan mundur ke ulang tahun selanjutnya
            message += `${i + 1}. ${name.trim()} : ${date.trim()} (@${number.trim()}) | ${age} tahun | ${daysLeft} hari lagi\n`;
        }
        conn.reply(m.chat, message, m);
    }
};

handler.help = ["ultahku", "hapusultah", "listultah"];
handler.tags = ["tools"];
handler.command = /^(ultahku|hapusultah|listultah)$/i;

export default handler;