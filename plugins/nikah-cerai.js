let handler = async (m, { conn }) => {
  var ayg = global.db.data.users[m.sender]
  var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,` *hai kamu itu belum nikah banyakin sadar diri ya :).*`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil Cerai Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`Berhasil Cerai Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`hai kamu itu belum nikah!\n\nbanyakin sadar diri ya !.`,m)
  }
}
handler.help = ['bercerai']
handler.tags = ['havefun']
handler.command = /^(cerai|bercerai)$/i
handler.group = true
handler.fail = null
export default handler