import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
    let vn = "./vn/anjay.mp3"
	conn.sendFile(m.chat, vn, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(anjayy|anjay|anjayyy|anjas|kelass|gg)$/i;
handler.command = new RegExp();

export default handler;