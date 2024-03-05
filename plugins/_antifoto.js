export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return false
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isFoto = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiFoto && isFoto) {
    if(isFoto === "imageMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Foto Terdeteksi*\n\nMaaf Tapi Harus Saya Hapus Karna Admin/Owner Mengaktifkan Anti Foto Untuk Chat Ini\nsilakan gunakan fitur 1x lihat`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return false
    }
  }
  return false
}