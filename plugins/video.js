let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(vbokep), null, `Nih *${name}* Video bokepnya..`, m)
}
handler.help = ['🗿']
handler.tags = ['fun']
handler.command = /^(bokep)$/i

handler.premium = true
handler.limit = true

handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const vbokep = [

"https://telegra.ph/file/bd46f312bac03bc534051.mp4",
]