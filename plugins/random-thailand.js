import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://aemt.me/thailand`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(thailand)$/i
handler.tags = ['fun']
handler.help = ['thailand']
handler.premium = false
handler.limit = true

export default handler