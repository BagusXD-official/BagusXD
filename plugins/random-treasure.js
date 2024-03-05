import fetch from 'node-fetch'
let treasure = []
fetch ('https://raw.githubusercontent.com/anndbby8/win-bot/main/treasure.txt')
    .then(res => res.text())
    .then(txt => treasure = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = treasure[Math.floor(Math.random() * treasure.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', 'Nih Kak Treasure Nya', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['treasure']
handler.tags = ['fun']
handler.limit = true
handler.command = /^(treasure)$/i

export default handler