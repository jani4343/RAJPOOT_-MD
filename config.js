const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUpISWtReTUvYWdNYlpRR0gxdnlkSlhnL0VZV0xxRTBRRGJGSE9BbDRFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmtSeDIxSzBTVVVyRUVaVlBBeE9Ic0VBVlY4dW01Y3phNStLQUs4ZWgxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TWVLd3huanc0V2xadGJKR0M0WFlYa3NidWpNb1NUNXFBY1NWMzI3V1VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5L2Y1RGk5UkpvWkI5RW9tQm5NdG5meDNSWkdCNkZNNVhSSWFtVUFyMXhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCYkhSMmdBdzdIYmhvdmJxUENDTFh6NUxrSjhlZUIySUdibXNSb0xhbjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFkdm9uU1AzTThJOHVuUnpIQ0hTdnp1Mm5EbS9qT01ZbnpQOUhIaFBLV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JMeXZMQzFFNDFoMlJ1d01DNWdCd1FiTUhxd2pCZ09paTRQQklFTzVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG9XZW5NZ29lTUpEQnIraEFROVBzMEZFbUxyM3JETDJaQkwrNlI5bXVqST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJnZm55TFZBL3ZWNm80Q2d2YllZcVlnUEVjemM4dFBiSjBuT2U4QkhCdXlMcGp2SEFPRTVEMXVkVkg1cGlESmM5MEE3d0Q4SWVOSWlaSlYyRytLckJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJrdVYxWXZHZTF2Y2FwVk1FVkpXQWE0WEhwMVRLQzg2bW5WWklsRzcxTWowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NjU4NzQyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NzkwM0Y3Q0JBMTE4MDQ5Q0VBMkEyMTBFQzhDMzM4MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0ODE2ODM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxOTY1ODc0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTM2RUY3OEZGMTg0N0VENEY3MTA3QjVDOTAwRTM2OTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDgxNjgzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWFo0SFRTM0EiLCJtZSI6eyJpZCI6IjkyMzE5NjU4NzQyMzo2MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjg4RfUyBDIM6bIFIgX+ODhCIsImxpZCI6IjEwNjYwNTgzNjI2NzY1Mjo2MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rbXRkTURFTDdDNGNRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBic3pQVFg2S0NsYnNJOTlBQWdSYmFGMWY1dDF5RUY0TlZ0cW1WYUFpQzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNjYnVicFBVVEVldVpuTnRMMzFUbnJndlBmUnZYVW93cHhHR0IvRVhIdCtNY3E1SnQwejYxSVpBU01ieWxuTVduNFlzNmhJazJvL3BDTFVLbE1ua0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5VjMvSWlVT0J4YXBJdEFQdktyajN2YXRuQm9yNXExa2FocC9qUndIeWZoeEV3NVI2dE05RUV5Y1VIYzVMMUZxSXN4ZXJzQmZDeUVzcU5qcExkRXhDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NjU4NzQyMzo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhVzdNejAxK2lncFc3Q1BmUUFJRVcyaGRYK2JkY2hCZURWYmFwbFdnSWd2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ4MTY4MzIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSitUIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAJPOOT-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAJPOOT-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAJPOOT-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*RAJPOOT-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
