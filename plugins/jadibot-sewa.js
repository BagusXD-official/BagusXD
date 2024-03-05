let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

OWNER BOT MELAYANI : 
~~~~~~~~~~~~~~~~~~~~~~~~~~
JASA JADIBOT :
•|• 1 Minggu = 10.000
•|• 2 Minggu = 20.000
•|• 3 Minggu = 30.000
•|• 1 Bulan = 35.000
---------------------------------------------------------------------
KONTAK OWNER : wa.me/6281280512161



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
        © _ANDINI_

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/5d181deeeeeaa238a789c.jpg', null, caption, m)
}
handler.help = ['jadibot2']
handler.tags = ['jadibot']
handler.command = /^(jadibot2)$/i;

handler.register = false
export default handler