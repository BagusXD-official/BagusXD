let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*sukses menyalakan bot* ✅')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|aktifkanbot|boton)$/i
handler.owner = true

export default handler