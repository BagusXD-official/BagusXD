import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hai, ${ucapan()}
${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬Ada yg bisa ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 1000) return // waktu ori 21600000 (6 jam)
    await m.reply(`📮Note: *BOT HANYA MODE GROUP!!*

Ingin Main Bot? 
Masuk Grup Di Bawah Untuk Menggunakan BOT. 

Link : https://chat.whatsapp.com/FhJFetmFism6hmHbfS58Xd

*MAAF DEMI MEMINIMALISIR SPAM SEKARANG NO KAMU TERBLOKIR OLEH BOT*

*SILAHKAN GUNAKAN BOT HANYA DI GRUP!!*

*INGIN MENYEWA BOT? TANYAKAN DI SALAH SATU ADMIN DALAM GRUP*

*BLOCK AKAN DI BUKA SEMINGGU SEKALI*
`)
await delay(4000)
await this.updateBlockStatus(m.chat, "block")
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}