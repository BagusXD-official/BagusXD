import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/quotes/islami?apikey=GataDios');
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.result) throw json;
  conn.reply(m.chat, `${json.result}`, m);
};

handler.help = ['islami'];
handler.tags = ['quotes'];
handler.command = /^(quotesislami|islami)$/i;
handler.limit = true;

export default handler;