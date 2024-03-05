import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*WINWIN - BOT | MD SEDANG AKTIF !!*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: 'iya kak ada apa ya?', body: 'Yaw? ada apa kak?', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(tes|winwinbotz|bot)$/i
handler.command = new RegExp

export default handler
