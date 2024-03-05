import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!text) throw `Mau Nanya Apa?\n\nContoh: .bot ketikan pesan yang ingin Anda tanyakan kepada asisten bot`
    let res = await fetch(`https://aemt.me/openai?text=${text}`) 
    let zel = await res.json()
   m.reply(zel.result)
}
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|bot)$/i
handler.limit = false
export default handler