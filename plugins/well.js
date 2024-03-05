import knights from "knights-canvas";
import fs from 'fs/promises';
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
const image = await new knights.Welcome()
    .setUsername("UNDEFINED")
    .setGuildName("WIBU NOLEP")
    .setGuildIcon("https://i.ibb.co/G5mJZxs/rin.jpg")
    .setMemberCount("120")
    .setAvatar("https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg")
    .setBackground("https://i.ibb.co/4YBNyvP/images-76.jpg")
    .toAttachment();
    
const data = image.toBuffer();
	conn.sendFile(m.chat, data, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(well)$/i
handler.tags = ['fun']
handler.help = ['korea']
handler.premium = false
handler.limit = true

export default handler