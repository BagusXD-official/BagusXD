import fs from 'fs';
import path from 'path';

let state = {
  currentIndex: 0,
  sending: false // Menandakan apakah sedang dalam proses pengiriman
};

let handler = async (m, { conn }) => {
  const audioFolder = './lagu'; // Sesuaikan dengan direktori folder audio Anda

  // Mendapatkan daftar file dalam folder audio Anda
  let audioFiles = fs.readdirSync(audioFolder);

  // Mengurutkan nama file audio secara alfabetis
  audioFiles = audioFiles.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  await conn.sendPresenceUpdate('recording', m.chat);

  // Cek apakah bot sedang mengirim file atau tidak
  if (!state.sending) {
    // Cek apakah masih ada file yang harus dikirim
    if (state.currentIndex < audioFiles.length) {
      let audioFile = audioFiles[state.currentIndex];

      state.sending = true; // Menandakan sedang dalam proses pengiriman
      await conn.sendFile(
        m.chat,
        path.join(audioFolder, audioFile),
        "hehe.mp3",
        null,
        m,
        true,
        {
          type: "audioMessage",
          ptt: true,
          waveform: [100, 0, 100, 0, 100, 0, 100],
          contextInfo: adReply.contextInfo
        }
      );

      // Menambahkan index untuk file berikutnya
      state.currentIndex++;

      state.sending = false; // Selesai mengirim file
    }
  }
};
handler.customPrefix = /^(Annyeong|Anyeong|winwin|bot|woy|woi)$/i
handler.command = new RegExp
//handler.limit = true
export default handler