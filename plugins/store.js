let handler = async m => m.reply(`
*ADMIN MENYEDIAKAN :*
~ Nokos All Negara
~ Sewa Bot Wa
~ Panel Bot Murah 
~ Jasa Edit Script Bot
~ Jasa Run Bot, Kalian Tinggal Scan / Masukan Kode Nya Saja
~ Jadi Bot Whatsap, Jadi Own Bot, Tinggal Scan
(Bisa Disewakan Lagi)

*[ LIST HARGA PANEL ]*

~RAM 1GB CPU 30% 1K/BULAN
~RAM 2GB CPU 50% 2K/BULAN
~RAM 3GB CPU 70% 3K/BULAN
~RAM 4GB CPU 90% 4K/BULAN
~RAM 5GB CPU 100% 5K/BULAN
~RAM 6GB CPU 120% 6K/BULAN
~RAM 7GB CPU 140% 7K/BULAN
~RAM 8GB CPU 160% 8K/BULAN
~RAM 9GB CPU  180% 9K/BULAN
~RAM 10GB CPU 200% 10K/BULAN

*SEMAKIN BESAR RAMNYA, SEMAKIN KENCENG PANELNYA!*

*>[ KEUNTUNGAN PANEL ]<*

-BOT JADI ON 24 JAM
-BISA BUAT RUN BOT NO RIBET
-WEBSITE/APK CLOSE BOT TETAP ON/JALAN
-GA BOROS KUOTA
-GA MENUHIN MEMORI
-SC AMAN GABAKAL DICURI
 
*GARANSI ON 14 HARI JIKA ADA BUKTI TF DAN CHAT*

*GABISA MAKE PANEL? TENANG SAYA SEDIAN TUTORNYA FREE*

MINAT? 💬 Jangan ragu untuk menghubungi kami melalui WhatsApp di nomor ini:
wa.me/6281280512161

© WINWIN - BOT | MD 🌟
`.trim()) 
handler.help = ['admin','store','win','andini']
handler.tags = ['main']
handler.command = /^(admin|store|win|andini)$/i

handler.limit = false

export default handler