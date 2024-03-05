let handler = async (m, { conn, args, usedPrefix, command }) => {
//let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let pp = 'https://telegra.ph/file/5d181deeeeeaa238a789c.jpg'
let teksbio = `*────[ BIODATA OWNER ]────*
*💌 Nama* : Ann
*✉️ Nama RL* : Andini
*♀️ Gender* : Perempuan
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 03/06/2008
*🎨 Umur* : 15
*🧮 Kelas* : 10
*🧩 Hobby* : Chatting, Halu, Nonton, Nyanyi/Dance, Ngedit script bot
*💬 Sifat* : ramah, kadang usil, pemalu, Prik
*🗺️ Tinggal* : Indo, Tangerang
*❤️ Suka* : warna biru, kpop, snh48group, nyanyi, dance, all hewan, gl, bl
*💔 Benci* : autis, seleb, alay, suka nyindir

`
conn.sendMessage(m.chat, { image: { url: pp }, caption: teksbio }, m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner|bio)$/i

export default handler