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
	let res = await fetch(`https://api.betabotz.org/api/maker/text2img?text=${text}&apikey=iMMI2sB3`).then(res => res.buffer())
			/*let convert = await res.json()
			let buff = await fetch(convert.result)
  .then(res => res.buffer())*/
			await conn.sendMessage(m.chat, { image: res, caption: ` *Nih kak gambarnya ヾ(＾-＾)ノ*\n\n *🍟sukses di buat dalam* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Gambar Gagal Di Buat\n\nCoba imajinasi yang lain.`)
		}
}
handler.help = ['ai','gambar']
handler.tags = ['ai']
handler.command = /^(gambar|bingimg)$/i
handler.limit = 5
export default handler