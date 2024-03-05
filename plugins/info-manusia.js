import fetch from 'node-fetch' 
let handler = async (m, { text }) => {
  let url = await fetch('https://vihangayt.me/details/population')
  let v = await url.json()
  let s = v.data.current
  let y = v.data.this_year
  let b = v.data.today
let hasil = ` *${htki} DATA DUNIA ${htka}*

*Total* : ${s.total}
*pria* : ${s.male}
*wanita* : ${s.female}

*${htki} TAHUN INI ${htka}*

*lahir* : ${y.births}
*meninggal* : ${y.deaths}

*${htki} HARI INI ${htka}*

*lahir* : ${b.births}
*meninggal* : ${b.deaths}

*Powered By ${wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['jumlahmanusia']
handler.tags = ['internet']
handler.command = /^(jumlahmanusia|jm)$/i
handler.limit = true

export default handler