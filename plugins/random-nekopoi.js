import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nekopoi?apikey=${global.xyro}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data, 'bahan.mp4', `_Tcih Dasar Sangean_`, m)
  } catch (e) {
	m.reply(eror)
	}
}
handler.tags = ['fun']
handler.help = ['n']
handler.command = /^(nekopoi)$/i
handler.premium = true

export default handler
