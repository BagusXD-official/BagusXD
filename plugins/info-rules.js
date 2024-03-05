/*
By : Zyko MD & S h e n d y 
©Zyko MD 2023

 * ig: @zykomd
 * yt: @zykobotz
 * tt: @zykosiapa
*/

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let math = max - xp
let tag = await conn.getName(m.sender)
let mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])

let mii = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰

➯ *JANGAN SPAM JIKA BOT MENGALAMI DELAY !!*
 _Kebijakan privasi atau Private without being in public_

• *Kebijakan Privasi:*
1. bot tidak akan merekam data riwayat chat user.
2. bot tidak akan menyebarkan nomor users.
3. bot tidak akan menyimpan media yang dikirimkan oleh users.
4. bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan   Agar terhindar dari Suspand_

• *Peraturan  :*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
6. owner akan melakukan blacklist grup ketika bot di tendang secara sepihak dari grup. 

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. jika ingin membeli scrip bot Whatsapp bisa langsung Hubungi ke no Whatsapp: wa.me/6281280512161


•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan  :*

1. keluar dari group jika ada salah satu member melanggar peraturan.
2. dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5.bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`
await conn.sendFile(m.chat, pp, 'menu.jpg', mii, false, m, adReply)
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(rules)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}