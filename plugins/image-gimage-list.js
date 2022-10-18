let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply('Masukkan Query nya, contoh .image pisang')
	
let tiktok = `
${htki}  📺 IMAGE SEARCH 🔎  ${htka}

⚡ Silakan pilih IMAGE SEARCH di tombol di bawah...

*Teks yang anda kirim:* ${text}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

Donasi :
Nomor Developer : wa.me/6282127487538
Nomor Owner Bot : wa.me/${nomorown}`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} IMAGE SEARCH Work✦-------`,
	rows: [
        {title: "IMAGE V1", rowId: `.image1 ${text}`, description: 'Scrape BochilTeam' },
	      {title: "IMAGE V2", rowId: `.image2 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "IMAGE V3", rowId: `.image3 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "IMAGE V4", rowId: `.image4 ${text}`, description: 'Apikey BX-HUNTER' },
        {title: "IMAGE V5", rowId: `.image5 ${text}`, description: 'Apikey XCODERS' },
        {title: "IMAGE V6", rowId: `.image6 ${text}`, description: 'Apikey XCODERS' },
        {title: "IMAGE V7", rowId: `.image7 ${text}`, description: 'Apikey NZCHA' },
    ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler
