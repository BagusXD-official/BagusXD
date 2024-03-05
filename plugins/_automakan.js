export async function before(m) {
    this.automakan = this.automakan ? this.automakan : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.automakan) {
        return false
    }
    let jadwalMakan = {
      pagi: "07:23",
      siang: "11:30",
      malam: "18:30"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [makan, waktu] of Object.entries(jadwalMakan)) {
        if (timeNow === waktu) {
        let caption = `Hai kak @${who.split`@`[0]},\nWaktu *makan* *${makan}* telah tiba, ambilah nasi dan segeralah makan🙂.\n\nWaktu Sekarang *${waktu}*`
            this.automakan[id] = [
                this.reply(m.chat, caption, null, {
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