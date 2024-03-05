let handler = async (m, { conn }) => {

	//-----PRICE
// List Harga
let pn = '20'
let ph = '70'
let pv = '110'
let ppm = '350'
let capt =`╭┄┄┄┄┄┄〖 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 〗╌╌╌╌╌╌⊶
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙷𝚎𝚖𝚊𝚝: ${pn}k ( 1 Bulan )
┊✧ Perpanjang 15k
┊✧ Unlock Feature Premium
┊ • Access Feature Jadibot, hd, hdr, 
┊   remini, asupan, anime random, dll
┊✧ Unlimited Limit
┊✧ 100.000.000 Money
┊
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙽𝚘𝚛𝚖𝚊𝚕: ${ph}k ( 6 Bulan )
┊✧ Perpanjang 60k
┊✧ Unlock Feature Premium
┊ • Access Feature Jadibot, hd, hdr, 
┊   remini, asupan, anime random, dll
┊✧ Unlimited Limit
┊✧ 500.000.000 Money
┊
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚅𝚒𝚙: ${pv}k ( 12 Bulan )
┊✧ Perpanjang 95k
┊✧ Unlock Feature Premium 
┊ • Access Feature Jadibot, hd, hdr, 
┊   remini, asupan, anime random, dll
┊✧ Unlimited Limit
┊✧ 1.000.000.000 Money
┊
┊⌬ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝: ${ppm}k ( Unlimitid )
┊✧ Unlock Feature Premium 
┊ • Access Feature Jadibot, hd, hdr, 
┊   remini, asupan, anime random, dll
┊✧ Unlimited Limit
┊✧ 50.000.000.000 Money
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶

⫹ ⛾ 𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐬 ⛾ ⫺
☘ 𝙿𝚞𝚕𝚜𝚊 𝚃𝚎𝚕𝚔𝚘𝚖𝚜𝚎𝚕: [ TANYA OWNER ]
☘ 𝙳𝚊𝚗𝚊: [ TANYA OWNER ]
☘ 𝚂𝚑𝚘𝚙𝚎𝚎 𝙿𝚊𝚢: [ TANYA OWNER ]
☘ 𝙾𝚟𝚘: [ TANYA OWNER ]
☘ 𝙶𝚘𝚙𝚊𝚢: [ TANYA OWNER ]
☘ 𝚀𝚛𝚒𝚜 (𝚊𝚕𝚕 𝚙𝚊𝚢𝚖𝚎𝚗𝚝): [ TANYA OWNER ]

*NOTE*
1. Melakukan pembelian artinya anda setuju dengan segala kebijakan kami.
2. Jika bot mengalami kendala atau perbaikan hingga 24 jam atau lebih, kami berikan kompensasi berupa penambahan waktu sewa.
3. Perpanjangan hanya berlaku jika masa aktif tersisa kurang dari 3 hari.

Informasi lebih lanjut mengenai pemilik dan penyewaan BOT dapat diakses melalui link berikut:

- Untuk informasi mengenai pemilik bot, silakan kunjungi: wa.me/${nomorown}
- Untuk bergabung dengan grup chat bot, silakan kunjungi: ${sgc}

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL
   
   ▌│█║▌║▌║║▌║▌║█│▌
`
conn.reply(m.chat, capt, m) 
}

handler.help = ['premium','buyprem']
handler.tags = ['main']
handler.command = /^(premium|buyprem)$/i

export default handler