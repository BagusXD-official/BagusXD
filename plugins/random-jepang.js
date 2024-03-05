import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://web-kira-master.cloud.okteto.net/api/cecan/japan?apikey=Zexxabot`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(japan|jepang)$/i
handler.tags = ['fun']
handler.help = ['japan']
handler.premium = false
handler.limit = true

export default handler