import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Jangan Lupa Save`, `bagusxvzzz@gmail.com`, `🇮🇩 Indonesia`, `📍 ${sig}`, `👤𝙾𝚠𝚗𝚎𝚛 ${namabot}`],

    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ `, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 ${sgh}`, `Jangan Lupa Donasi Kak :v`]

  ], m)
  let vn = "./vn/owner.mp3"
  await conn.sendFile(m.chat, vn, 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler