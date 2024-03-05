let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|sex|sexx|ngewe|go?blo?k|to?lo?l|idiot|crot|crott|crottt|ccroot|nge?nto?(t|d)|jembut|babi|babii|babiii|sange|pig|pigg|babi|babii|sangee|snge|sngee|kontol|kntl|bego|dajj?al|janc(u|o)k|pantek|puki|kimak|kampang|bokep|bkp|bokepp|lonte|asw|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|asw|tits|bastard|assholebji?r|shi?ba?l|tolo?l|anji?(r|y)|anjr|asu|vji?r|salale?o/i// tambahin sendiri
export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warn += 1
        m.reply(`${user.warn >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Kotor Terdeteksi*'}

あ Warning: ${user.warn} / 5

[❗] Jika Warning Mencapai 5 Kamu Akan Dikeluarkan Dari Group

*Pikirkanlah tentang dampak kata-katamu. Kata-kata kotor dapat melukai perasaan orang lain dan merusak hubungan. Cobalah untuk mengungkapkan dirimu dengan cara yang lebih baik dan lebih positif* `)
        if (user.warn >= 5) {
            user.warn = 0
           await time(2000) 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }