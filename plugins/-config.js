let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'aperto': 'not_announcement',
'chiuso': 'announcement',
'ga': 'not_announcement',
'gc': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍
│*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
│✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
│${usedPrefix + command} abrir*
│${usedPrefix + command} cerrar*
╰─────°.♡.°‧─────`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] IL GRUPPO E STATO APERTO/CHIUSO CORRETTAMENTE*')}
}
handler.help = ['group open / close', 'gruppo aperto / chiuso','ga / gc']
handler.tags = ['group']
handler.command = /^(group|gruppo|g)$/i
handler.admin = true
handler.botAdmin = true
handler.limit = 1
export default handler
