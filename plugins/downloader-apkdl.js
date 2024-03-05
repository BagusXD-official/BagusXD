import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan nama apk\ncontoh; ${usedPrefix}${command} pou`
	await conn.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key,
    }
  });
	try {
	let res = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
  let result = await res.json()
  let p = result.data
  let buff = await fetch(result.data.icon)
  .then(res => res.buffer())
  let cap = `
*Name*: ${p.name}
*Lastup*: ${p.lastup}
*Tipe*: ${p.package}
*Size*: ${p.size}

Sedang mengirim file.... 
 `
			await conn.sendMessage(m.chat, { image: buff, caption: cap, }, { quoted: m })
  await conn.sendFile(m.chat, p.dllink, p.name, null, m, true, {
                    quoted: m,
                    mimetype: "application/vnd.android.package-archive"
                })
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
}
}
handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl)$/i
handler.limit = true

export default handler