import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `❓Nyari Apa?`
  let res = await fetch(`https://api.erdwpe.com/api/search/linkgroupwa?text=${text}`)
  m.reply(wait)
  try {
  let json = await res.json()
  json = json.result.map((v) => `*Judul:* ${v.nama}\n*Link:* ${v.link}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(json)
  } catch (e) {
  m.reply(`❗Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['gcwa']
handler.tags = ['internet']
handler.command = /^(gcwa)$/i
handler.limit = true

export default handler