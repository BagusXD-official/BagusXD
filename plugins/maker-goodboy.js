import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teksnya?'
  let res = `https://api.lolhuman.xyz/api/goodboy?apikey=${global.lolkey}&name=${text}`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak Sertifikatnya`, m, false)
}
handler.help = ['goodboy']
handler.tags = ['maker']
handler.command = /^(goodboy)$/i
handler.register = false

handler.limit = true

export default handler