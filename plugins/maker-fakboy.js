import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teksnya?'
  let res = `https://api.lolhuman.xyz/api/fuckboy?apikey=${global.lolkey}&name=${text}`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak Sertifikatnya`, m, false)
}
handler.help = ['fakboy']
handler.tags = ['maker']
handler.command = /^(fakboy)$/i
handler.register = false

handler.limit = true

export default handler