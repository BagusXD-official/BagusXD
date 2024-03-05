let handler = async (m, { conn }) => {

	//-----PRICE
// List Harga
let sn = '15'
let sh = '40'
let sv = '80'
let spm = '150'
let capt = `Permisi, izinkan saya menjelaskan layanan kami terkait BOT WhatsApp yang kami tawarkan dengan fitur-fitur unggulan yang terdiri dari:

🌟 BOT WhatsApp Penjaga Grup 🌟

Dengan fitur otomatis yang dapat:

🚫 Anti-Spam: Menutup grup jika ada tindakan spam stiker atau gambar yang melebihi batas yang ditentukan.

🖼️ Anti-Foto: Menghapus foto kecuali jika dilihat sekali.

🎥 Anti-Video: Menghapus video kecuali jika dilihat sekali.

🔗 Anti-Link: Menghapus pesan yang berisi tautan grup lain serta mengeluarkan pengirimnya secara otomatis.

⚠️ Anti-Toxic: Memberikan peringatan jika ada anggota yang berperilaku toksik, dengan batasan peringatan sebanyak lima kali sebelum dihapus dari grup.

🌐 Anti-Virtex: Mendeteksi dan mengeluarkan pengirim virtex dari grup.

🎮 Fitur Game: Menyediakan lebih dari 80 game, termasuk game RPG, untuk hiburan semua anggota grup.

Selain itu, tersedia beragam fitur lain seperti AI, Anime, Meme, Story, Group, Fun, Game, Convert, Quotes, Audio, Kerang, Alquran, Islamic, Maker, dan Stalker.

Fitur download kami mencakup platform seperti Youtube, Tiktok, Facebook, Instagram, Mediafire, Gdrive, dan lainnya.

Bot kami beroperasi nonstop selama 24 jam sehingga grup Anda akan tetap aman meskipun tanpa pengawasan.

Informasi lebih lanjut mengenai pemilik dan penyewaan BOT dapat diakses melalui link berikut:

- Untuk informasi mengenai pemilik bot, silakan kunjungi: wa.me/${nomorown}
- Untuk bergabung dengan grup chat bot, silakan kunjungi: ${sgc}

╭┄┄┄┄┄┄〖 𝐒𝐞𝐰𝐚 〗╌╌╌╌╌╌⊶
┊⌬ 𝚂𝚎𝚠𝚊 𝙽𝚘𝚛𝚖𝚊𝚕: ${sn}k/Group ( 1 Bulan )
┊✧ Perpanjang 10k
┊⌬ 𝚂𝚎𝚠𝚊 𝙷𝚎𝚖𝚊𝚝: ${sh}k/Group ( 6 Bulan )
┊✧ Perpanjang 35k
┊⌬ 𝚂𝚎𝚠𝚊 𝚅𝚒𝚙: ${sv}k/Group ( 12 Bulan )
┊✧ Perpanjang 75k
┊⌬ 𝚂𝚎𝚠𝚊 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝: ${spm}k/Group ( Unlimitid )
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶
《 ${bottime} 》

*NOTE*
1. Melakukan pembelian artinya anda setuju dengan segala kebijakan kami.
2. Jika bot mengalami kendala atau perbaikan hingga 24 jam atau lebih, kami berikan kompensasi berupa penambahan waktu sewa.
3. Perpanjangan hanya berlaku jika masa aktif tersisa kurang dari 3 hari.

⫹ ⛾ 𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐬 ⛾ ⫺
☘ 𝙿𝚞𝚕𝚜𝚊 𝚃𝚎𝚕𝚔𝚘𝚖𝚜𝚎𝚕: [ TANYA OWNER ]
☘ 𝙳𝚊𝚗𝚊: [ TANYA OWNER ]
☘ 𝚂𝚑𝚘𝚙𝚎𝚎 𝙿𝚊𝚢: [ TANYA OWNER ]
☘ 𝙾𝚟𝚘: [ TANYA OWNER ]
☘ 𝙶𝚘𝚙𝚊𝚢: [ TANYA OWNER ]
☘ 𝚀𝚛𝚒𝚜 (𝚊𝚕𝚕 𝚙𝚊𝚢𝚖𝚎𝚗𝚝): [ TANYA OWNER ]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌


Terima kasih atas perhatiannya. 🌟
`

conn.reply(m.chat, capt, m) 
}

handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^(sewabot|sewabot|sewa)$/i

export default handler