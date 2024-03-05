import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://aemt.me/malaysia`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(malaysia)$/i
handler.tags = ['fun']
handler.help = ['malaysia']
handler.premium = false
handler.limit = true

export default handler