import axios from 'axios';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `Linknya?\nExample: *.douyin linknya*`;

  await conn.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key,
    }
  });

  let res = await axios.get(`https://aemt.me/download/douyin?url=${text}`);
  let data = res.data;
  let pi = data.result.url;
  let ya = pi.nowm
  let cap = `_Nih Kak Videonya >,<_`;

  conn.sendMessage(m.chat, { video: { url: ya }, caption: cap }, m);
}

handler.help = ['douyin'];
handler.tags = ['downloader'];
handler.command = /^(douyin|dy|dauyin)$/i;
handler.limit = true;

export default handler;