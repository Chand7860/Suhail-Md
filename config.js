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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_22_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIksvQ2dMNkZ6bkIyTGFWcTBUMUlBMm05Vys3MWtSQkpnUVdiMlcvWEVvVUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJiRFJwZVpLUnd1U2VoMElHbDNuc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJlZDRjNDMtNDdkNS00NGUzLWE0MGYtMmJiOTU0ZmY3OWFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMCxcbiAgICAgIDY4LFxuICAgICAgMTgzLFxuICAgICAgMjE3LFxuICAgICAgMjI1LFxuICAgICAgMTk5LFxuICAgICAgMjI4LFxuICAgICAgNjksXG4gICAgICAxNTUsXG4gICAgICAxNDYsXG4gICAgICA5LFxuICAgICAgMTU5LFxuICAgICAgMTI3LFxuICAgICAgOTUsXG4gICAgICAyMjAsXG4gICAgICAzMSxcbiAgICAgIDIyNCxcbiAgICAgIDIwMixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTQ5LFxuICAgICAgNjcsXG4gICAgICAxMTQsXG4gICAgICA5MyxcbiAgICAgIDYzLFxuICAgICAgMTEyLFxuICAgICAgMzksXG4gICAgICAxOTksXG4gICAgICA5NSxcbiAgICAgIDc0LFxuICAgICAgMjcsXG4gICAgICAxMCxcbiAgICAgIDE5MyxcbiAgICAgIDk0LFxuICAgICAgMjIzLFxuICAgICAgMTI4LFxuICAgICAgNzUsXG4gICAgICAzOCxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByOGhwWURFSmV4NHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3pPYUlOb3JMRHU5SDVPUFhvNEZzMXZ5SStoY01mcGRsVFN3akx3WUQxVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBTlJBeUNsam5UR2htNmFDQlN0OUl4UUxUNWRjWXpSZmZDdUkrNUJxSHQzUnRCSW1OekRPcnNvTjEvQytVYmI1Ry9mQm84SmJjQWQ4S2tWZXBJaUlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvYmppR3UvUDc2LzRUYy9CamlkYVZlRjJGVGxoUk5EbmhXaGI1TFJYZGVoalFDVHdXVTJHdXREQktaSGFxSFdxVmxkb01jMWhmUjJTanJJSE54VlhCdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ3OTIyNDI5NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0NTAwMTMxMzkzNjY3OjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDc5MjI0Mjk3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjc2NTY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTU96XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4Q1VoMmJNMXU5N0F5ZFBDcVFNTHQ3RVVadklRMzNKY2c1YUZ1cU1pWnN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MTU1ODAwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE5OTc3ODgxMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PMS5qc29uIjogIntcImtleURhdGFcIjpcIkdSdm5kVHp1S3ByNVFRZm45VnlmdXJyUllGdU83KzdEeXJ4NVFBZ2hVOUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTzIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6VExPTlZHT2p3aWdXeE4xYWk2MG1lT096VHpGdWhGZk1uRTBxdXEzMmFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MTU1ODAwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI3NjQ1MjExOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1Pei5qc29uIjogIntcImtleURhdGFcIjpcImc4WnEzUUNmdXNRaWpoVTRTVjZjTHNSS1FwU1VjdUd6NURPTEVpVTN6OTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
