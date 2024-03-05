import fetch from 'node-fetch'
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) return m.reply(`Masukan Soal!\n\nContoh:\n${usedPrefix + command} Manusia Terbuat Dari Apa?`)
    let { result } = await (await fetch(API('lol', '/api/brainly', { query: text }, 'apikey'))).json()
    let cap = result.map((v, i) => {
        return `
*${i + 1}.* ${v.question.content}

jawaban : ${v.answer.content.replace(/Jawaban(:)?/i, '')}
`.trim()
    }).join('\n\n\n')
    m.reply(cap)
}
handler.help = ['brainly <query>']
handler.tags = ['internet']
handler.command = /^brainly|guru$/i
export default handler