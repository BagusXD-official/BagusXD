import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {

try {

let res = await fetch('https://api.thecatapi.com/v1/images/search')

let img = await res.json()

let caption = `

powered by winwinbot | md

`.trim()

conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m)

} catch (e) {

console.log(e)

throw '*Error!*'

}}

handler.help = ['kucing']

handler.tags = ['random']

handler.command = /^kucing$/i

handler.fail = null

export default handler