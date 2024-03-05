let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*sukses mematikan bot* 📴')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['aktif/matikan']
handler.tags = ['owner']
handler.command = /^(banchat|matikanbot|botoff)$/i

handler.owner = true

export default handler