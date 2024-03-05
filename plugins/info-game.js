import { readFileSync } from 'fs'
let handler = async (m, {conn, command, args, usedPrefix}) => {
let ktnya = ['\n\n\n' + htjava + ' Mungkin menu ini bermanfaat? ' + htjava,
 '\n\n\n' + htjava + ' Terimakasih sudah menggunakan bot ini ' + htjava,
 '\n\n\n' + htjava + ' Semoga gak erorr ' + htjava,
 '\n\n\n' + htjava + ' Jika lama kemungkiman erorr atau delay ' + htjava,
 '\n\n\n' + htjava + ' Menampilkan menu ' + htjava,
 '\n\n\n' + htjava + ' Wait... ' + htjava,
 '\n\n\n' + htjava + ' Dua tiga kucing berlari ' + htjava,
 '\n\n\n' + htjava + ' Bentar bang akan kutampilkan menunya ' + htjava,
 '\n\n\n' + htjava + ' Prosess... ' + htjava]
let ktx = ktnya.getRandom()
const tekss = `${htki} RPG GAME ${htka}
	    ${done} adventure => ${usedPrefix}adventure
	    ${done} bansos => ${usedPrefix}bansos
	    ${done} buy => ${usedPrefix}buy
	    ${done} berburu => ${usedPrefix}berburu
	    ${done} berdagang => ${usedPrefix}berdagang
	    ${done} berkebon => ${usedPrefix}berkebon
	    ${done} bet => ${usedPrefix}bet
	    ${done} build => ${usedPrefix}build
	    ${done} casino => ${usedPrefix}casino
	    ${done} cek => ${usedPrefix}cek
	    ${done} chop => ${usedPrefix}chop
	    ${done} collect => ${usedPrefix}collect
	    ${done} cook => ${usedPrefix}cook
	    ${done} cooldown => ${usedPrefix}cooldown
	    ${done} craft => ${usedPrefix}craft
	    ${done} daily => ${usedPrefix}daily
	    ${done} duel => ${usedPrefix}duel
	    ${done} dungeon => ${usedPrefix}dungeon
	    ${done} eat => ${usedPrefix}eat
	    ${done} feed => ${usedPrefix}feed
	    ${done} heal => ${usedPrefix}heal
	    ${done} hourly => ${usedPrefix}hourly
	    ${done} hunt => ${usedPrefix}hunt
	    ${done} inventory => ${usedPrefix}inventory
	    ${done} kandang => ${usedPrefix}kandang
	    ${done} kerja => ${usedPrefix}kerja
	    ${done} koboy => ${usedPrefix}koboy
	    ${done} kolam => ${usedPrefix}kolam
	    ${done} leaderboard => ${usedPrefix}leaderboard
	    ${done} mancing => ${usedPrefix}mancing
	    ${done} mentransfer => ${usedPrefix}mentransfer
	    ${done} merampok => ${usedPrefix}merampok
	    ${done} mining => ${usedPrefix}mining
	    ${done} mission => ${usedPrefix}mission
	    ${done} monthly => ${usedPrefix}monthly
	    ${done} nabung => ${usedPrefix}nabung
	    ${done} nambang => ${usedPrefix}nambang
	    ${done} nebang => ${usedPrefix}nebang
	    ${done} nguli => ${usedPrefix}nguli
	    ${done} ojek => ${usedPrefix}ojek
	    ${done} open-crate => ${usedPrefix}opencrate
	    ${done} open => ${usedPrefix}open
	    ${done} pasar => ${usedPrefix}pasar
	    ${done} petstore => ${usedPrefix}petstore
	    ${done} pointxp => ${usedPrefix}pointxp
	    ${done} profile => ${usedPrefix}profile
	    ${done} ramuan => ${usedPrefix}ramuan
	    ${done} repair => ${usedPrefix}repair
	    ${done} rob => ${usedPrefix}rob
	    ${done} roket => ${usedPrefix}roket
	    ${done} sell => ${usedPrefix}sell
	    ${done} shopfish => ${usedPrefix}shopfish
	    ${done} shop => ${usedPrefix}shop
	    ${done} slect-skill => ${usedPrefix}slectskill
	    ${done} slot => ${usedPrefix}slot
	    ${done} tarik => ${usedPrefix}tarik
	    ${done} taxy => ${usedPrefix}taxy
	    ${done} toko => ${usedPrefix}toko
	    ${done} transfer => ${usedPrefix}transfer
	    ${done} upgrade => ${usedPrefix}upgrade
	    ${done} use => ${usedPrefix}use
	    ${done} weekly => ${usedPrefix}weekly
	    ${done} work => ${usedPrefix}work`
const listMessage = {
  text: tekss,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  
}
  	return conn.sendMessage(m.chat, listMessage, {quoted: m})
                }
///AKSJDDJ
handler.help = ['game']
handler.tags = ['rpg']
handler.command = /^gam(es|ing|e)$/i 

export default handler