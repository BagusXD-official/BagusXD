import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import PhoneNumber from 'awesome-phonenumber'
import path from 'path';
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix: _p }) => {

  let user = `@${m.sender.split('@')[0]}`
    
  
let tags = {}
const defaultMenu = {
  before: `

❏──「 *H A R G A  S E W A* 」
│ •  𝟏 𝐌𝐢𝐧𝐠𝐠𝐮 : 𝟓𝐊
│ •  𝟏 𝐁𝐮𝐥𝐚𝐧 : 𝟐𝟎𝐊
❏──────────────๑
══════════════════
Pengigat : %harike
══════════════════
©BagusXD ®ANYA CHAN
 ══════════════════
 ⚠️ *DILARANG SPAM BOT!!* ⚠️
 ══════════════════
▬▭▬▭ *ALL MENU* ▬▭▬▭ 

`.trimStart(),
  header: '╭━─━「 %category 」',
  body: '│༆ %cmd %isPremium %islimit',
  footer: '╰━─━─━─━─━─❥',
  after: '',
}
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Kolkata' })
    time = time.replace(/[.]/g, ':')
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let tag = `@${m.sender.split('@')[0]}`
    let totalreg = Object.keys(global.db.data.users).length
    let platform = os.platform()
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
      
let zonaWaktu = 'Asia/Jakarta';
let tanggalAwalRamadhan = moment.tz('2024-03-10', zonaWaktu);
let hariKeRamadhan = () => {
  let hariKe = moment().diff(tanggalAwalRamadhan, 'days') + 1;
  return hariKe > 0 ? `Selamat Menunaikan Ramadhan Hari ke ${hariKe}` : `Hari ke ${Math.abs(hariKe)} menuju Ramadhan`;
}
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      name, tag, date, time, platform, _p, totalreg,
      readmore: readMore,
harike : hariKe
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 conn.sendMessage(m.chat, {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      title: `ANYA CHAN | MD`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/7517dfdca23570f039309.jpg',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
      
const audioFolder = './lagu'; // Ubah sesuai dengan direktori folder audio Anda

// Mendapatkan daftar file dalam folder audio
const audioFiles = fs.readdirSync(audioFolder);

// Memilih file audio secara acak
const randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];

await conn.sendPresenceUpdate('recording', m.chat);
await conn.sendFile(m.chat, path.join(audioFolder, randomAudioFile), "hehe.mp3", null, m, true, {
  type: "audioMessage",
  ptt: true,
  waveform: [100, 0, 100, 0, 100, 0, 100],
  contextInfo: adReply.contextInfo
});
  } catch (e) {
    m.reply('Error')
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu|all)$/i
handler.daftar = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}