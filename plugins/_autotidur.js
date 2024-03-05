export async function before(m) {
    this.automakan = this.automakan ? this.automakan : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.automakan) {
        return false
    }
    let jadwalMakan = {
      tidur: "22:00", 
      tidurr: "23:00", 
       tidurrr: "23:30"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [makan, waktu] of Object.entries(jadwalMakan)) {
        if (timeNow === waktu) {
        let caption = `Hai kak @${who.split`@`[0]},\nWaktu *${makan}* Telah Tiba,Selamat tidur, semoga kamu mendapatkan istirahat yang nyenyak.Jangan biarkan kekhawatiran mengganggu tidurmu, percayalah bahwa semuanya akan baik-baik saja. dan semoga besok pagi kamu bangun dengan semangat baru.😇\n\nWAKTU SEKARANG *${waktu}*`
            this.automakan[id] = [
                this.reply(m.chat, caption, m, {
    contextInfo: {
      mentionedJid: [who]
    }
  }),
                setTimeout(() => {
                    delete this.automakan[id]
                }, 6000)
            ]
        }
    }
}
export const disabled = false