import axios from 'axios';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `Linknya?\nExample: *.twitter linknya*`;

  await conn.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key,
    }
  });

  let res = await axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=GataDios&url=${text}`);
  let data = res.data;
  let pi = data.result.media[0];
  let cap = `_Nih Kak Videonya >,<_`;

  conn.sendFile(m.chat, pi.url, 'fb.mp4', `🔗 *nih kak videonya* ( ͡≖ ل͜ ͡≖)`, m);
}

handler.help = ['twitter'];
handler.tags = ['downloader'];
handler.command = /^(twitter|tw)$/i;
handler.limit = true;

export default handler;