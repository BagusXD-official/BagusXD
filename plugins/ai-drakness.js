import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		await conn.reply(m.chat, wait, m)
		try {
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(`https://vihangayt.me/maker/darkness?url=${out}&no=50`).then(res => res.buffer())
			//let convert = await res.json()
			//let buff = await fetch(convert.url)
  //.then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: res, caption: ` *sudah selesai kak* ヾ(＾-＾)ノ\n\n🍟 *sukses dalam* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Gagal server sedang maintenance!!.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
};
handler.help = ['remini', 'hdr', 'hd']
handler.tags = ['ai']
handler.command = /^(drakness|draknes|drak)$/i
handler.limit = 5

export default handler