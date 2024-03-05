import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://aemt.me/vietnam`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(vietnam)$/i
handler.tags = ['fun']
handler.help = ['vietnam']
handler.premium = false
handler.limit = true

export default handler