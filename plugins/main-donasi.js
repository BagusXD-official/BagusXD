let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 0895700121662
│┝‷✧ *Dana:* 0895700121662
│┝‷✧ *Gopay:* 0895700121662
│┝‷✧ *Ovo:* 0895700121662
│┝‷✧ *Saweria:* https://saweria.co/AndiniAW
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281280512161?text=kak+mau+donasi
╰──────────···───╮
   
   ▌│█║▌║▌║║▌║▌║█│▌

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/5192ab6e534da87c6d37f.jpg', null, caption, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi)$/i;

handler.register = false
export default handler