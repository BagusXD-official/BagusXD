import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://aemt.me/china`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(china)$/i
handler.tags = ['fun']
handler.help = ['china']
handler.premium = true
handler.limit = true

export default handler