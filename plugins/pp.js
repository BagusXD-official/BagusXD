let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`ga punya agama ya ?`)
}

handler.customPrefix = /^(p|oi|oyy|pp)$/i
handler.command = new RegExp
export default handler