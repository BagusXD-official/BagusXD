import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tebe/i.test(m.quoted.contentText)) return !0
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
  if (!(id in this.tebakbendera)) return m.reply('lu telat :v')
  if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    if (['.tebe', 'Bantuan', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.name.toLowerCase()) {
      global.db.data.users[m.sender].exp += 200
            global.db.data.users[m.sender].limit += 10
            global.db.data.users[m.sender].koin += 500
            conn.reply(m.chat, `*✓ Benar!*\nSelamat Kamu Mendapatkan:\n• 2000 Exp\n• 500 Koin\n• 10 Limit`, m)
      clearTimeout(this.tebakbendera[id][3])
      delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*pinter dikit napa !!*`)
  }
  return !0
}
handler.exp = 0

export default handler
