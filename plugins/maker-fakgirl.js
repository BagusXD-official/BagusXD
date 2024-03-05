import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teksnya?'
  let res = `https://api.lolhuman.xyz/api/fuckgirl?apikey=${global.lolkey}&name=${text}`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak Sertifikatnya`, m, false)
}
handler.help = ['fakgirl']
handler.tags = ['maker']
handler.command = /^(fakgirl)$/i
handler.register = false

handler.limit = true

export default handler