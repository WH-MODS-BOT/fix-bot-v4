
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!text.split('|')[1]) throw 'Gunakan Format\n' + usedPrefix + command + ' halo |ya|gak'

let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			
			let cap = `*Polling Request By* ${name}\n*Pesan:* ${text.split('|')[0]}`
			return conn.sendPoll(m.chat, cap, a, m)
}

handler.help = ['poll text|text|text']
handler.tags = ['group']
handler.owner = true
handler.command = /^poll(ing|s)?$/i

export default handler
