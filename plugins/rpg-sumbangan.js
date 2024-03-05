let confirmation = {}

async function handler(m, { conn, args }) {
    if (confirmation[m.sender]) return m.reply('Kamu sedang meminta sumbangan!')
    
    const count = args[0]
    if (!count) return m.reply("⚠️ Masukkan angka jumlah sumbangan.")
    if (!isNumber(count)) return m.reply("⚠️ Jumlah sumbangan harus berupa angka.")
    
    let hasil = formatRupiah(Number(count));
    let txt = `Apakah kamu yakin ingin memberi sumbangan\n✅ (Yes) ❌ (No)`
    let confirm = `😔 Kak, bagikan sumbangan sejumlah *${hasil}*\n\n${txt}`;
    let { key } = await conn.reply(m.chat, confirm, m, { mentions: [m.sender] })
    
    confirmation[m.sender] = {
        sender: m.sender,
        count,
        hasil,
        key,
        pesan: conn,
        timeout: setTimeout(() => {
            conn.sendMessage(m.chat, { delete: key })
            delete confirmation[m.sender]
        }, 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys || !(m.sender in confirmation)) return
    let {
        timeout,
        sender,
        count,
        hasil,
        key,
        pesan
    } = confirmation[m.sender]

    if (m.id === key.id) return
    let user = global.db.data.users[m.sender]
    let _user = global.db.data.users[sender]

    if (/(✔️|y(es)?)/gi.test(m.text)) {
        if (m.sender !== sender) {
            user.money -= count * 1
            _user.money += count * 1
            m.reply(`✨ Terima kasih!\n${m.sender.split('@')[0]} telah memberi sumbangan sejumlah *${hasil}*`)
            pesan.sendMessage(m.chat, { delete: key })
            clearTimeout(timeout)
            delete confirmation[sender]
        } else {
            await m.reply("⚠️ Tidak bisa meminta sumbangan ke diri sendiri!")
        }
    }
    if (/(✖️|n(o)?)/gi.test(m.text)) {
        m.reply(`😔 ${m.sender.split('@')[0]}, kamu berdosa banget kak...`)
        pesan.sendMessage(m.chat, { delete: key })
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['sumbangan [jumlah]']
handler.tags = ['rpg']
handler.command = /^(sumbangan)$/i

export default handler

function isNumber(x) {
    return !isNaN(x)
}

function formatRupiah(number) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });

    return formatter.format(number);
}