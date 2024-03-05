import fetch from 'node-fetch'

let handler = async (m, { 
conn,
text,
usedPrefix, 
command
 }) => {
 await conn.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key,
    }
  });

  if (!text) throw `mau gambar apa?`
  
    try {
    let old = new Date()
	let res = await fetch(`https://aemt.me/bingimg?text=${text}`)
			let convert = await res.json()
			let buff = await fetch(convert.result)
  .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: ` *Nih kak gambarnya ヾ(＾-＾)ノ*\n\n *🍟sukses di buat dalam* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Gambar Gagal Di Buat\n\nCoba imajinasi yang lain.`)
		}
}
handler.help = ['gambar2']
handler.tags = ['ai']
handler.command = /^(gambar2|bingimg2)$/i
handler.premium = true
export default handler