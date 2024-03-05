import ytdl from '@distube/ytdl-core';
import fs from 'fs';
import search from 'yt-search';
import ffmpeg from 'fluent-ffmpeg';
import { exec } from 'child_process';

let sentVideos = [];

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*Contoh*: .playvideo rewrite the star');

  conn.sendMessage(m.chat, {
    react: {
      text: '⏳',
      key: m.key,
    }
  });

  try {
    let searchResults = await search(text);
    let videoId = searchResults.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    if (sentVideos.includes(title)) {
      let newVideoId = '';
      for (let i = 0; i < searchResults.videos.length; i++) {
        if (!sentVideos.includes(searchResults.videos[i].title)) {
          newVideoId = searchResults.videos[i].videoId;
          break;
        }
      }

      if (!newVideoId) {
        return m.reply('🐱 Tidak ada video lagi dengan judul yang sama');
      }

      videoId = newVideoId;
      info = await ytdl.getInfo(videoId);
      title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    }

    let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio', filter: 'audioonly' });
    let video = ytdl(videoId, { format });
    let fileSize = 0;

    video.on('data', (chunk) => {
      fileSize += chunk.length;

      if (fileSize > 100 * 1024 * 1024) {
        video.destroy();
        fs.unlinkSync(`${title}.mp3`);
        m.reply('🐱 Video yang Anda minta melebihi 50MB');
      }
    });

    video.pipe(fs.createWriteStream(`${title}.mp3`)).on('finish', () => {
      ffmpeg(`${title}.mp3`)
        .toFormat('wav')
        .on('error', (error) => {
          console.log(error);
          m.reply(`🐱 Terjadi kesalahan saat mengonversi audio: ${error.message}`);
        })
        .on('end', () => {
          let buffer = fs.readFileSync(`${title}.wav`);
          conn.sendFile(m.chat, buffer, `${title}.wav`, '', m);
          fs.unlinkSync(`${title}.mp3`);
          fs.unlinkSync(`${title}.wav`);
          conn.sendMessage(m.chat, {
            react: {
              text: '✅',
              key: m.key,
            }
          });

          sentVideos.push(title);

          if (sentVideos.length > 10) {
            sentVideos.shift();
          }
        })
        .save(`${title}.wav`);
    });
  } catch (e) {
    console.log(e);
    m.reply(`🐱 Terjadi kesalahan saat mengunduh video: ${e.message}`);
  }
};

handler.help = ['video'];
handler.tags = ['downloader'];
handler.limit = 5;
handler.command = /^xx$/i;

export default handler;