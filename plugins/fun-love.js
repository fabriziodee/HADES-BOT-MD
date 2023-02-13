let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MISURATORE D'AMORE ❤️❤️*
*L'amore di ${text} per te è di* *${Math.floor(Math.random() * 100)}%* *per un 100%*
*Dovresti chiederle di essere la tua ragazza/o ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
handler.limit = 1
export default handler
