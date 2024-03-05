let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `*[❗] Teks Tidak Ditemukan*\n\n*—◉ Contoh:*\n*◉ ${usedPrefix + command} Hades-bot*`
    let teks = encodeURI(text)

    if (command == 'attp2') {
        let teksb = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
        conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teksb }), 'sticker.webp', '', m, false, { asSticker: true })
    }

    if (command == 'attp') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'attp3') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'ttp5') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'ttp4') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'ttp3') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'ttp2') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }

    if (command == 'ttp') {
        conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })
    }
}

handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2', 'attp3']
handler.tags = ['sticker']
handler.limit = 2

export default handler