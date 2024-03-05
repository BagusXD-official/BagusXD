let handler = async (m, { conn, args, isAdmin, isOwner }) => {
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      dfail('admin', m, conn)
      throw false
    }
  }

  let txt = ''
  let isOnline = args && /.*@g.us/.test(args[0]) // Cek apakah perintah adalah untuk grup tertentu
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.presences) // Ambil daftar grup dengan informasi online

  for (let [jid, chat] of groups) {
    let onlineMembers = Object.keys(chat.presences).filter(member => chat.presences[member].lastKnownPresence === 5) // 5 indicates online status
    let groupInfo = await conn.groupMetadata(jid)
    let groupName = groupInfo.subject || ''
    
    if (isOnline && jid !== args[0]) continue // Skip grup yang tidak sesuai dengan argumen jika ada

    txt += `*${groupName}*\nMembers online: ${onlineMembers.length}\n\n`
  }

  if (isOnline && !txt.trim().length) {
    conn.reply(m.chat, 'Grup tidak ditemukan atau tidak memiliki anggota online', m)
    return
  }

  if (isOnline) {
    let online = [...Object.keys(conn.chats.get(args[0]).presences), conn.user.jid]
    conn.reply(m.chat, '┌「 *Daftar Wibu* 」\n' + online.map(v => '├ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', m, {
      contextInfo: { mentionedJid: online }
    })
  } else {
    m.reply(`List Groups Online:\n${txt.trim()}`)
  }
}
handler.help = ['online', 'groups', 'grouplist']
handler.tags = ['info', 'group']
handler.command = /^(here|(list)?online|group(s|list))$/i

export default handler