import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${dosa.getRandom()}`, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bokep)$/i;
handler.command = new RegExp();

export default handler;

const dosa = [
"./vn/dosa.mp3",
"./vn/dosa1.mp3"
]