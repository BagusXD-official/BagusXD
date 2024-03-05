let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (user.warn == 0) throw 'Kamu Tidak Memiliki Peringatan!'

    user.warn -= 1
    m.reply(`Selamat Peringatan Kamu Berkurang \n\nPeringatan Kamu: ${user.warn}`)
}
handler.customPrefix = /^(maafkan saya bot|astaghfirullah)$/i;
handler.command = new RegExp();

handler.limit = 20

export default handler