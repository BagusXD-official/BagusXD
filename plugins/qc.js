import axios from "axios";
import { sticker } from '../lib/sticker.js';
import wibusoft from "wibusoft";

const packname = "NamaPackStiker";

let handler = async (m, { conn, args, command }) => {
    try {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
        let name = await conn.getName(who);
        let text = args.length >= 1 ? args.join(" ") : m.quoted && m.quoted.text ? m.quoted.text : null;
        if (!text) throw "Silakan masukkan teks atau reply pesan yang ingin dijadikan kutipan!";

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        let pp = await conn.profilePictureUrl(m.sender, "image").catch(_ => "");
        let temas;
        if (command == "qc") temas = "terang";
        if (command == "qc2") temas = "gelap";
        if (command == "qc3") temas = "random";

        let result = await Quotly(name, pp, text, temas);

        try {
            let out = await wibusoft.tools.makeSticker(result, {
                author: packname,
                pack: name,
                keepScale: true
            });
            await m.reply(out);
        } catch (e) {
            let stick = await sticker(buffer, false, name, packname);
            await conn.sendFile(m.chat, stick, "Quotly.webp", "", m);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

handler.help = ["qc", "qc2", "qc3"];
handler.tags = ["sticker"];
handler.command = ["qc", "qc2", "qc3"];
handler.limit = 4;

export default handler;

async function Quotly(a, b, c, d) {
    let obj;
    if (d == "terang") {
        obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
                entities: [],
                avatar: true,
                from: {
                    id: 1,
                    name: a,
                    photo: { url: b }
                },
                text: c,
                replyMessage: {}
            }]
        };
    } else if (d == "random") {
        obj = {
            type: "quote",
            format: "png",
            backgroundColor: getRandomHexColor().toString(),
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
                entities: [],
                avatar: true,
                from: {
                    id: 1,
                    name: a,
                    photo: { url: b }
                },
                text: c,
                replyMessage: {}
            }]
        };
    } else if (d == "gelap") {
        obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#1b1429",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
                entities: [],
                avatar: true,
                from: {
                    id: 1,
                    name: a,
                    photo: { url: b }
                },
                text: c,
                replyMessage: {}
            }]
        };
    }

    let json;
    try {
        json = await axios.post("https://quote.btch.bz/generate", obj, { headers: { "Content-Type": "application/json" } });
        const results = json.data.result.image;
        const buffer = Buffer.from(results, "base64");
        return buffer;
    } catch (err) {
        throw `Error saat membuat kutipan: ${err}`;
    }
}

function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}