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
     let res = JSON.parse(readFileSync('./json/emoji.json'))
     let em = res.emoji
const sections = [
   {
	title: `${htki} RPG GAME ${htka}`,
	rows: [
	    {title: `${em.getRandom()} adventure`, rowId: `${usedPrefix}adventure`, description: ktx},
	    {title: `${em.getRandom()} bansos`, rowId: `${usedPrefix}bansos`, description: ktx},
	    {title: `${em.getRandom()} buy`, rowId: `${usedPrefix}buy`, description: ktx},
	    {title: `${em.getRandom()} berburu`, rowId: `${usedPrefix}berburu`, description: ktx},
	    {title: `${em.getRandom()} berdagang`, rowId: `${usedPrefix}berdagang`, description: ktx},
	    {title: `${em.getRandom()} berkebon`, rowId: `${usedPrefix}berkebon`, description: ktx},
	    {title: `${em.getRandom()} bet`, rowId: `${usedPrefix}bet`, description: ktx},
	    {title: `${em.getRandom()} build`, rowId: `${usedPrefix}build`, description: ktx},
	    {title: `${em.getRandom()} casino`, rowId: `${usedPrefix}casino`, description: ktx},
	    {title: `${em.getRandom()} cek`, rowId: `${usedPrefix}cek`, description: ktx},
	    {title: `${em.getRandom()} chop`, rowId: `${usedPrefix}chop`, description: ktx},
	    {title: `${em.getRandom()} collect`, rowId: `${usedPrefix}collect`, description: ktx},
	    {title: `${em.getRandom()} cook`, rowId: `${usedPrefix}cook`, description: ktx},
	    {title: `${em.getRandom()} cooldown`, rowId: `${usedPrefix}cooldown`, description: ktx},
	    {title: `${em.getRandom()} craft`, rowId: `${usedPrefix}craft`, description: ktx},
	    {title: `${em.getRandom()} daily`, rowId: `${usedPrefix}daily`, description: ktx},
	    {title: `${em.getRandom()} duel`, rowId: `${usedPrefix}duel`, description: ktx},
	    {title: `${em.getRandom()} dungeon`, rowId: `${usedPrefix}dungeon`, description: ktx},
	    {title: `${em.getRandom()} eat`, rowId: `${usedPrefix}eat`, description: ktx},
	    {title: `${em.getRandom()} feed`, rowId: `${usedPrefix}feed`, description: ktx},
	    {title: `${em.getRandom()} heal`, rowId: `${usedPrefix}heal`, description: ktx},
	    {title: `${em.getRandom()} hourly`, rowId: `${usedPrefix}hourly`, description: ktx},
	    {title: `${em.getRandom()} hunt`, rowId: `${usedPrefix}hunt`, description: ktx},
	    {title: `${em.getRandom()} inventory`, rowId: `${usedPrefix}inventory`, description: ktx},
	    {title: `${em.getRandom()} kandang`, rowId: `${usedPrefix}kandang`, description: ktx},
	    {title: `${em.getRandom()} kerja`, rowId: `${usedPrefix}kerja`, description: ktx},
	    {title: `${em.getRandom()} koboy`, rowId: `${usedPrefix}koboy`, description: ktx},
	    {title: `${em.getRandom()} kolam`, rowId: `${usedPrefix}kolam`, description: ktx},
	    {title: `${em.getRandom()} leaderboard`, rowId: `${usedPrefix}leaderboard`, description: ktx},
	    {title: `${em.getRandom()} mancing`, rowId: `${usedPrefix}mancing`, description: ktx},
	    {title: `${em.getRandom()} mentransfer`, rowId: `${usedPrefix}mentransfer`, description: ktx},
	    {title: `${em.getRandom()} merampok`, rowId: `${usedPrefix}merampok`, description: ktx},
	    {title: `${em.getRandom()} mining`, rowId: `${usedPrefix}mining`, description: ktx},
	    {title: `${em.getRandom()} mission`, rowId: `${usedPrefix}mission`, description: ktx},
	    {title: `${em.getRandom()} monthly`, rowId: `${usedPrefix}monthly`, description: ktx},
	    {title: `${em.getRandom()} nabung`, rowId: `${usedPrefix}nabung`, description: ktx},
	    {title: `${em.getRandom()} nambang`, rowId: `${usedPrefix}nambang`, description: ktx},
	    {title: `${em.getRandom()} nebang`, rowId: `${usedPrefix}nebang`, description: ktx},
	    {title: `${em.getRandom()} ngocok`, rowId: `${usedPrefix}ngocok`, description: ktx},
	    {title: `${em.getRandom()} nguli`, rowId: `${usedPrefix}nguli`, description: ktx},
	    {title: `${em.getRandom()} ojek`, rowId: `${usedPrefix}ojek`, description: ktx},
	    {title: `${em.getRandom()} open-crate`, rowId: `${usedPrefix}opencrate`, description: ktx},
	    {title: `${em.getRandom()} open`, rowId: `${usedPrefix}open`, description: ktx},
	    {title: `${em.getRandom()} pasar`, rowId: `${usedPrefix}pasar`, description: ktx},
	    {title: `${em.getRandom()} petstore`, rowId: `${usedPrefix}petstore`, description: ktx},
	    {title: `${em.getRandom()} pointxp`, rowId: `${usedPrefix}pointxp`, description: ktx},
	    {title: `${em.getRandom()} profile`, rowId: `${usedPrefix}profile`, description: ktx},
	    {title: `${em.getRandom()} ramuan`, rowId: `${usedPrefix}ramuan`, description: ktx},
	    {title: `${em.getRandom()} repair`, rowId: `${usedPrefix}repair`, description: ktx},
	    {title: `${em.getRandom()} rob`, rowId: `${usedPrefix}rob`, description: ktx},
	    {title: `${em.getRandom()} roket`, rowId: `${usedPrefix}roket`, description: ktx},
	    {title: `${em.getRandom()} sell`, rowId: `${usedPrefix}sell`, description: ktx},
	    {title: `${em.getRandom()} shopfish`, rowId: `${usedPrefix}shopfish`, description: ktx},
	    {title: `${em.getRandom()} shop`, rowId: `${usedPrefix}shop`, description: ktx},
	    {title: `${em.getRandom()} slect-skill`, rowId: `${usedPrefix}slectskill`, description: ktx},
	    {title: `${em.getRandom()} slot`, rowId: `${usedPrefix}slot`, description: ktx},
	    {title: `${em.getRandom()} tarik`, rowId: `${usedPrefix}tarik`, description: ktx},
	    {title: `${em.getRandom()} taxy`, rowId: `${usedPrefix}taxy`, description: ktx},
	    {title: `${em.getRandom()} toko`, rowId: `${usedPrefix}toko`, description: ktx},
	    {title: `${em.getRandom()} transfer`, rowId: `${usedPrefix}transfer`, description: ktx},
	    {title: `${em.getRandom()} upgrade`, rowId: `${usedPrefix}upgrade`, description: ktx},
	    {title: `${em.getRandom()} use`, rowId: `${usedPrefix}use`, description: ktx},
	    {title: `${em.getRandom()} weekly`, rowId: `${usedPrefix}weekly`, description: ktx},
	    {title: `${em.getRandom()} work`, rowId: `${usedPrefix}work`, description: ktx}
	]
    },{
	title: `${htki} Non-RPG GAME ${htka}`,
	rows: [
	    {title: `${em.getRandom()} asahotak`, rowId: `${usedPrefix}asahotak`, description: ktx},
	    {title: `${em.getRandom()} caklontong`, rowId: `${usedPrefix}caklontong`, description: ktx},
	    {title: `${em.getRandom()} family100`, rowId: `${usedPrefix}family100`, description: ktx},
	    {title: `${em.getRandom()} fight`, rowId: `${usedPrefix}fight`, description: ktx},
	    {title: `${em.getRandom()} gombal`, rowId: `${usedPrefix}gombal`, description: ktx},
	    {title: `${em.getRandom()} math`, rowId: `${usedPrefix}math`, description: ktx},
	    {title: `${em.getRandom()} siapakahaku`, rowId: `${usedPrefix}siapakahaku`, description: ktx},
	    {title: `${em.getRandom()} slot`, rowId: `${usedPrefix}slot`, description: ktx},
	    {title: `${em.getRandom()} suitpvp`, rowId: `${usedPrefix}suitpvp`, description: ktx},
	    {title: `${em.getRandom()} susunkata`, rowId: `${usedPrefix}susunkata`, description: ktx},
	    {title: `${em.getRandom()} tebakan`, rowId: `${usedPrefix}tebakan`, description: ktx},
	    {title: `${em.getRandom()} tebakanime`, rowId: `${usedPrefix}tebakanime`, description: ktx},
	    {title: `${em.getRandom()} tebakbendera`, rowId: `${usedPrefix}tebakbendera`, description: ktx},
	    {title: `${em.getRandom()} tebakchara`, rowId: `${usedPrefix}tebakchara`, description: ktx},
	    {title: `${em.getRandom()} tebakgambar`, rowId: `${usedPrefix}tebakgambar`, description: ktx},
	    {title: `${em.getRandom()} tebakjenaka`, rowId: `${usedPrefix}tebakjenaka`, description: ktx},
	    {title: `${em.getRandom()} tebakkabupaten`, rowId: `${usedPrefix}tebakkabupaten`, description: ktx},
	    {title: `${em.getRandom()} tebakkalimat`, rowId: `${usedPrefix}tebakkalimat`, description: ktx},
	    {title: `${em.getRandom()} tebakkata`, rowId: `${usedPrefix}tebakkata`, description: ktx},
	    {title: `${em.getRandom()} tebakkimia`, rowId: `${usedPrefix}tebakkimia`, description: ktx},
	    {title: `${em.getRandom()} tebaklagu`, rowId: `${usedPrefix}tebaklagu`, description: ktx},
	    {title: `${em.getRandom()} tebaklirik`, rowId: `${usedPrefix}tebaklirik`, description: ktx},
	    {title: `${em.getRandom()} tebaklogo`, rowId: `${usedPrefix}tebaklogo`, description: ktx},
	    {title: `${em.getRandom()} tebaksiapa`, rowId: `${usedPrefix}tebaksiapa`, description: ktx},
	    {title: `${em.getRandom()} tebakumur`, rowId: `${usedPrefix}tebakumur`, description: ktx},
	    {title: `${em.getRandom()} tekateki`, rowId: `${usedPrefix}tekateki`, description: ktx},
	    {title: `${em.getRandom()} tictactoe`, rowId: `${usedPrefix}tictactoe`, description: ktx}
	]
	}
]

let tek = `*Hai ${conn.getName(m.sender)}* 👋
Silahkan Pilih Game Disini
`
const listMessage = {
  text: tek,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  mentions: await conn.parseMention(tek),
  title: `${htki} *LIST MENU* ${htka}`,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  	return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
///AKSJDDJ
handler.help = ['game']
handler.tags = ['rpg']
handler.command = /^gam(es|ing|e)$/i 

export default handler