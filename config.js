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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_40_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJmYjF2ZzhuOUxtU1hkaHdOYVRtT25kUHE2akVtRnVTVjNTTXVVQ2oxT2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFDZVR1NXBYUlR1MXF4a1NUclNRZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY3ZDNmMTQtYTc1ZC00ZTA5LTlkNjQtZTZjNDJhMmYyYjhhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTQ2LFxuICAgICAgMjE3LFxuICAgICAgMjQ4LFxuICAgICAgMTgzLFxuICAgICAgMjM3LFxuICAgICAgNDgsXG4gICAgICA2MixcbiAgICAgIDIyMSxcbiAgICAgIDg1LFxuICAgICAgMTMzLFxuICAgICAgMjMyLFxuICAgICAgOTcsXG4gICAgICAxNSxcbiAgICAgIDE3LFxuICAgICAgMTUzLFxuICAgICAgNTcsXG4gICAgICA4OCxcbiAgICAgIDM0LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTI4LFxuICAgICAgMTAsXG4gICAgICAxMDQsXG4gICAgICAzMixcbiAgICAgIDE1MCxcbiAgICAgIDE2MixcbiAgICAgIDksXG4gICAgICA0NSxcbiAgICAgIDI1LFxuICAgICAgMCxcbiAgICAgIDEwMixcbiAgICAgIDEyLFxuICAgICAgMjI4LFxuICAgICAgMjE5LFxuICAgICAgNTUsXG4gICAgICA5LFxuICAgICAgMTEzLFxuICAgICAgMjAwLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDhCQktERk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MTIwOTIwNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCVIPCThqkg8J2Qk/CdkIcn2Lkg8J2Qg/CdkITwnZCC8J2QhPCdkI3wnZCTIPCdkIHwnZCO8J2QiPCdkIgg8JOGqiDLkM2iwrtcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wk4apIPCdkIjKiPCdkJcg8J2QgPCdkIfwnZCM8J2QhPCdkIMg8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiMTYxMTM5NjQwMDA4ODcwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmFIaTRnRUVNU2I3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxOHhONW9jNERJMGdXelZCaVVlMjNvQVR0M3hwS1g4NGxSNDFQT08xUFNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIisvN2xIYjhBbUVWeERCVHU1Uytxb3Fzb0ZTdUtFZ0lCaXhyTzFRQWw3NUxtbm1wYWp5eElaRTlyUmxoc1htM3Rmd0hCOWhyeFEwRFFTOS9VREp0TkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJxSHV1K00rK3VacU1Ha1JnblVBTENMekpFK2RHUm9VMks5aW1WejRDUUJ1MGo2dWJVUHBMQlBZRUlRMnhsaXdxMzVKWHQzYkQ1Nk1BeHVjN3FCK2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MTIwOTIwNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NTQwMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKb1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpvWS5qc29uIjogIntcImtleURhdGFcIjpcIlY4VXZUTm9teWYyRDl2M256bkN4Y2FxZ2RnMEJXRWVsSU9uTFBRVWFyVnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5MDcwMDE4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDU0MDI4MTczXCJ9Igp9"
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
