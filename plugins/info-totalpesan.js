//create by andini
import fs from 'fs';

let handler = async (m, { conn }) => {
    const messages = conn.chats[m.chat].messages;
    const participantCounts = {};
    
    Object.values(messages).forEach(({ key }) => {
        participantCounts[key.participant] = (participantCounts[key.participant] || 0) + 1;
    });
    
    const sortedData = Object.entries(participantCounts)
        .sort((a, b) => b[1] - a[1]);
    
    const totalM = sortedData.reduce((acc, [, total]) => acc + total, 0);
    const totalPeople = sortedData.length;
    
    const pesanBaru = sortedData.map(([jid, total]) => {
        return {
            JID: jid,
            TotalPesan: total
        };
    });
    
    let pesanSebelumnya = [];
    
    try {
        // Membaca file JSON jika sudah ada sebelumnya
        pesanSebelumnya = JSON.parse(fs.readFileSync('pesan.json', 'utf8'));
    } catch (err) {
        // Tangani kesalahan jika file tidak ditemukan atau ada masalah lainnya
        console.error(err);
    }
    
    let totalPesanLama = 0;
    
    if (pesanSebelumnya.length > 0) {
        totalPesanLama = pesanSebelumnya.reduce((acc, pesan) => acc + pesan.TotalPesan, 0);
    }
    
    // Menambahkan pesan baru ke pesan yang sudah ada sebelumnya
    pesanSebelumnya = pesanSebelumnya.concat(pesanBaru);
    
    // Menyimpan data pesan terbaru ke dalam file JSON
    fs.writeFileSync('pesan.json', JSON.stringify(pesanSebelumnya, null, 2));
    
    const formattedPesanBaru = pesanBaru.map((pesan, index) => {
        return `*${index + 1}.* ${pesan.JID.replace(/(\d+)@.*/, '@$1')}: *${pesan.TotalPesan}* pesan`;
    }).join('\n');
    
    await m.reply(
        `📊 *Total Pesan Terakhir*: *${totalM}* pesan dari *${totalPeople}* orang\n\n${formattedPesanBaru}`,
        null,
        {
            contextInfo: {
                mentionedJid: sortedData.map(([jid]) => jid)
            }
        }
    );
}

handler.help = ['totalpesan'];
handler.tags = ['group'];
handler.command = /^(totalpesan)$/i;
handler.group = true;

export default handler;