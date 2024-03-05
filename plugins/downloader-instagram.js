import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
    if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`;

    await conn.sendMessage(m.chat, {
      react: {
        text: "⏳",
        key: m.key,
      }
    });

    let res = await fetch(`https://vihangayt.me/download/instagram?url=${text}`);
    let data = await res.json();

    if (!data || !data.data || !data.data.data || !data.data.data[0] || !data.data.data[0].url) {
      throw 'Failed to fetch video data.';
    }

    let pi = data.data.data[0].url;
    let cap = `_Nih Kak Videonya >,<_`;

    conn.sendMessage(m.chat, { video: { url: pi }, caption: cap }, m);
  } catch (e) {
    conn.sendMessage(m.chat, `Maaf kak, gagal diunduh. Silahkan coba kembali atau cari video yang lain jika masih gagal. Error: ${e}`, m)
  }
}

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|igdl|ig|instagramdl)$/i;
handler.limit = true;

export default handler;