let handler = m => m

handler.before = async function (m) {
    // Check if the message is sent in a group
    if (m.isGroup) {
        // Ignore messages in groups
        return;
    }

    // Check if the user is banned
    if (global.db.data.users[m.sender].banned === true) {
        let banReason = global.db.data.users[m.sender].banReason || 'No reason provided.';
        m.reply(`maaf, nomor mu telah terbanned oleh bot.\n\nReason: ${banReason}`);
        return;
    }
}

export default handler