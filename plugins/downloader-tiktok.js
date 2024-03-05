import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
try {
  let res = `https://api.cafirexos.com/api/tiktokv2?url=${text}`
  let cap = `nih kak`
  conn.sendMessage(m.chat, { video: { url: res }, caption: cap }, { quoted: m })
// conn.sendMessage(m.chat, { audio: { url: res }, mimetype: 'audio/mp4' }, { quoted : m })
  } catch (e) {
  m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
  }
  }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler