const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
global.autoreacts = process.env.AUTO_REACTS || "true"

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_14_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCdzB2WlpMTGZocDU2ZnZYNHhhVGJYNC9QNUhrejJoUDN4NHRZU2IyMWVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtMmxnY0R4UFFGLS1tX01MOXhMME1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwOGFmMGEwLTVhMGEtNDExNS1iOWQ1LWQ5ZTc4MWE0ODA5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDM0LFxuICAgICAgMjQ0LFxuICAgICAgMTU2LFxuICAgICAgNzEsXG4gICAgICA0LFxuICAgICAgNzYsXG4gICAgICA5NSxcbiAgICAgIDE0LFxuICAgICAgMTYxLFxuICAgICAgMTUzLFxuICAgICAgMTQxLFxuICAgICAgMjI1LFxuICAgICAgMTQ4LFxuICAgICAgMTY5LFxuICAgICAgOTMsXG4gICAgICAyMjksXG4gICAgICAxMTgsXG4gICAgICAxNSxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxMTEsXG4gICAgICAyMTMsXG4gICAgICAxNTUsXG4gICAgICAxNjYsXG4gICAgICA5NixcbiAgICAgIDIyLFxuICAgICAgNjIsXG4gICAgICAxNDYsXG4gICAgICAyMTcsXG4gICAgICAyMzAsXG4gICAgICAzLFxuICAgICAgMjAxLFxuICAgICAgOTQsXG4gICAgICAxOTksXG4gICAgICA3MCxcbiAgICAgIDE5OCxcbiAgICAgIDc1LFxuICAgICAgMjExLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDc4aHBZREVLemMvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjek9hSU5vckxEdTlINU9QWG80RnMxdnlJK2hjTWZwZGxUU3dqTHdZRDFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlgyZTdjaXN6MmpwWEs1OFRtZ1laTGw4Y2FBdkdZbkRFb2xsMFcxbWdGTm1laEpDVk1yZ25PSGdRcWZoU2x1UzlpazBjLzFRaXRLbGxjS1k2dU5sdEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFOOEJsRk91RnhzQ3NmSmFzb2tMNllOY3dyUFB0cWFpL0M1SU9tS0g0c0pHZzdIdStYR2NaK1l0RHpmSUlIM3ZzeTJZM1FJSHZJemVrL2E4UFZrQkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc5MjI0Mjk3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ1MDAxMzEzOTM2Njc6MTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NzkyMjQyOTc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MDgwNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURleS5qc29uIjogIntcImtleURhdGFcIjpcImdJeU4zNnJKZE1wNkM2cnNIWmhDZ3NUR1cxSlBBMlJjQ3JtdTYySlVEcnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZdUpGbE1WSHMvVU44NDFTSVRwVDl6YUtGY2xUK0FDNml3Y3NIem04R0xrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MTU1ODAxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcwNzY1MTg2NVwifSIKfQ=="
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
