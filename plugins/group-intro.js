let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `
•❅─────✧❅✦❅✧─────❅•
_______𓊈ɪɴᴛʀᴏ ᴅᴜʟᴜ𓊉_______
‿︵‿︵‿︵‿︵ ‿︵‿︵‿︵‿︵
╔══════════════════╗
║➩  ɴᴀᴍᴀ        :
║➩  ᴜsɪᴀ          :
║➩  ᴋᴇʟᴀs        :
║➩  ᴀsᴀʟ          :
║➩  ʜᴏʙʙʏ       :
║➩  ɢᴇɴᴅᴇʀ     :
║➩  ᴘᴀᴄᴀʀ       :
║➩  sᴛᴀᴛᴜs     :
╚══════════════════
╰─────ᴍᴏʜᴏɴ ᴅɪɪsɪ ─────╯
‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵
❀•°•════ஓ๑♡๑ஓ════•°•❀
`
conn.reply(m.chat, krtu, m)
}
handler.customPrefix = /^(intro)$/i;
handler.command = new RegExp();

export default handler