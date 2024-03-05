import fs from 'fs';

let handler = async (m, { conn }) => {
    let rules = `
Tutorial Penggunaan Bot:

1. Semua Fitur Bot Menggunakan Prefix Yaitu Harus Menggunakan Titik (.) di Awal Perintah Agar Perintahnya Aktif.
   Contoh: Ketik .allmenu

2. Jika Kamu Ingin Bermain Game, Coba Lihat di List Have Fun, Di Situ Kamu Bisa Menemukan Fitur untuk Bersenang-senang Seperti Family100 yang Mengharuskan Menjawab Semua Pertanyaan.
   Contoh Penggunaan: Ketik .family100

3. Jika Kamu Ingin Mencari Sesuatu, Kamu Bisa Lihat di List Menu Internet, Kamu Bisa Menemukan Seperti Buka Lapak.
   Contoh Penggunaan: Ketik .bukalapak Hoodie Kekinian

4. Jika Ingin Mendownload Seperti Video, Reels Fb/Ig, Story Ig, dan Lain Sebagainya, Kamu Bisa Melihat di List Menu Download.
   Contoh Penggunaan: Ketik .facebook url instagram 

5. Jika Ingin Mengubah atau Menggunakan Fitur yang Berhubungan dengan Media Seperti Audio, Foto, dan Video, Kamu Harus Balas Chatnya dan Ketik Perintahnya 
   Contoh Penggunaan: Balas/Reply Vn Nya Terus Ketik .tomp3

6. Jika Kamu Kehabisan Limit, Kamu Bisa Membelinya dengan Cara Mengetik .*shop beli limit* 1

Kamu Tidak Punya Uang?, Kamu Bisa Memainkan Game yang Ada di Menu HaveFun, Jika Kamu Bisa Menjawab/Memenangkan Game Tersebut, Kamu Akan Mendapatkan Exp, Uang, dan Limit.

Tidak Punya Limit? Kamu Bisa Ambil Limit di Bonus Harian dengan Cara Ketik .*harian*

7. Jika Ingin Melihat Semua Data Kamu, Ketik *.me*

8. Jika Ingin Memutar/Mendownload Youtube, Silakan Ketik Perintah Berikut:
   Contoh .play judul lagu

_Note: Jika Masih Tidak Mengerti, Hubungi Owner dengan Cara Mengetik .owner_
`;

    await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7517dfdca23570f039309.jpg' }, caption: rules }, m);
};

handler.help = ['tutorial'];
handler.tags = ['info'];
handler.command = /^(tutorial|info)$/i;

export default handler;