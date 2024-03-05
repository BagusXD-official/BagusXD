let handler = async (m, { conn, args }) => { 
    if (!args || !args[0]) throw 'Siapa yang mau di warn nih?'
    let mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.Banned) throw 'User telah terbanned!!'
    if ((user.warn * 1) < 5) {
        user.warn += 1
        m.reply('berhasil Warn')
        m.reply('Kamu di warn oleh OWNER Atau MODERATOR!!, dan sekarang kamu punya *' + (user.warn + 1) + '* WARN. Ingat Jika kamu mendapat warn 5 kali kamu akan otomatis ke banned', mention)
    } else if ((user.warn * 1) > 2) {
        let reason = (args.length > 0 || args[1] ? args.slice(1).join(' ') : '5 kali WARN') || '5 kali WARN'
        user.Banned = true
        user.BannedReason = reason
        user.warn = 0
        m.reply('*Dia sudah Terbanned, karena mendapatkan 5 warn*')
        m.reply('*Kamu Terbanned karena telah mendapatkan 5 kali warn*\n *HUBUNGI* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
    }
}

handler.help = ['warn @mention']
handler.tags = ['owner']
handler.command = /^warn(user)?$/i
handler.owner = true


export default handler