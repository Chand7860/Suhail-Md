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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_29_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXNjSTZXUlE1TXFVQU11ci8rNXFQaE1JcTdmOTd3NGxFdzlmZmpURGpkVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid0ZPLS05WThUMGV4bEIzd2w4MHJGd1wiLFxuICBcInBob25lSWRcIjogXCI2ZGY2M2U0Yi0yZWIyLTQyYzAtYjMzYy0yYjY3ZDY5ZGM1YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTYyLFxuICAgICAgMTM3LFxuICAgICAgMTg2LFxuICAgICAgMCxcbiAgICAgIDI1MSxcbiAgICAgIDI0OSxcbiAgICAgIDEyMSxcbiAgICAgIDE3OCxcbiAgICAgIDIzNixcbiAgICAgIDgsXG4gICAgICAzNCxcbiAgICAgIDk1LFxuICAgICAgNjQsXG4gICAgICAzNCxcbiAgICAgIDE2MCxcbiAgICAgIDExNyxcbiAgICAgIDQyLFxuICAgICAgMTE0LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjQyLFxuICAgICAgNTAsXG4gICAgICAyMTMsXG4gICAgICAxOTcsXG4gICAgICAxOTIsXG4gICAgICAxNzgsXG4gICAgICAzNCxcbiAgICAgIDc1LFxuICAgICAgMjMxLFxuICAgICAgMjQ4LFxuICAgICAgMTU2LFxuICAgICAgOTksXG4gICAgICAyMTMsXG4gICAgICAyMzgsXG4gICAgICAxMzksXG4gICAgICAxOTgsXG4gICAgICAxOTUsXG4gICAgICAxNTAsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NDlUNzRMV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjA3MDY2ODY1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjY4MTU1MDExNDkzNzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOenQyOE1ERU1mUTRyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklKREVsTEdUTEEwTGtBb3lwQjRucGs1eWU0bCszdGlpdzZLbnNqOTJrSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2M2Z25qcmZPa3FHeTJ1U0Z1dGlNOTBhZ21VK1hKN1AwT2d1Qk5xOVpUNWM2MnRzc0hlbXp1MG5wbUZjekhCRVp1S2ViR01xMkxlRlZHNHF4V25LQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGZxMTNLMTB2SzZ5UVV1MVNXWnU4WWF3MlFkSDlCRXNpMkI4cVFIbXVhSXhNaFM0US9PdWJMci9nbW55ZXFRSFNQdFNidFp3dGdwK0s2WjZBbm01QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjA3MDY2ODY1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyODA1ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
