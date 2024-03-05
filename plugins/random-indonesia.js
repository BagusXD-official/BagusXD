import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://aemt.me/indonesia`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(indonesia)$/i
handler.tags = ['fun']
handler.help = ['indonesia']
handler.premium = false
handler.limit = true
 
export default handler