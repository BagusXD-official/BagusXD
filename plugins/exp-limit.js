let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'reset') {
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*Berhasil Direset ${lim} / User*`, m)
		}
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    let caption = `
 *ɪ ɴ ғ ᴏ  ᴜ s ᴇ ʀ*
 
◦ *ʟɪᴍɪᴛ:* ${ke1}
◦ *ᴇxᴘ:* ${ke2}
◦ *ᴍᴏɴᴇʏ:* ${ke3}

𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐝𝐚𝐩𝐚𝐭𝐤𝐚𝐧 𝐛𝐨𝐧𝐮𝐬 𝐡𝐚𝐫𝐢𝐚𝐧 𝐤𝐞𝐭𝐢𝐤𝐚𝐧 .𝐜𝐥𝐚𝐢𝐦
`
  conn.reply(m.chat, caption, m)

}
handler.help = ['balance']
handler.tags = ['main']
handler.command = /^(balance|ceklimit|limit)$/i
export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}