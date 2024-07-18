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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_07_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmUyUkhqeXVOZXlJMVd3RDdTeXRQODJKS3pQakdiZUVDR1ZYMWI1RFpBaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0dCb1JCS3RUNjZMdFRXNmxHRTBrd1wiLFxuICBcInBob25lSWRcIjogXCIwNWY2ODUyNS1jN2U5LTRlYzItYTVmNS01NTczYzc5ODMyMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMTAsXG4gICAgICAyMjEsXG4gICAgICAyMjQsXG4gICAgICAxMDksXG4gICAgICAxNTksXG4gICAgICAxODMsXG4gICAgICAxNyxcbiAgICAgIDEyOSxcbiAgICAgIDI1MyxcbiAgICAgIDEzLFxuICAgICAgNjIsXG4gICAgICA5OCxcbiAgICAgIDE4LFxuICAgICAgNjYsXG4gICAgICA1OCxcbiAgICAgIDEzMSxcbiAgICAgIDg2LFxuICAgICAgNzAsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICAxMDgsXG4gICAgICAyMzAsXG4gICAgICA4MyxcbiAgICAgIDE2MyxcbiAgICAgIDE4MixcbiAgICAgIDIwNixcbiAgICAgIDUyLFxuICAgICAgMTQxLFxuICAgICAgMTQ0LFxuICAgICAgMTcwLFxuICAgICAgMTk4LFxuICAgICAgMjMxLFxuICAgICAgMjYsXG4gICAgICAxMDksXG4gICAgICAxMjMsXG4gICAgICAyNDAsXG4gICAgICA2MyxcbiAgICAgIDE3OSxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzM1NNNEgxQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDgxMTYxNjcwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2NjE4MzkxNDAwNjUzOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVMveHFRQkVPN3U0N1FHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxQnA1aWlnUW5zbjhjUjlncDk2aW0rRGlEcEhsRUFuNFJYSUV2cFdJY3pZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlgwZ3RqRnA0QkpoeHlzYklKdjFQT1lubVRMWmpwK0xUWk1Wc0dtYjBLcmFYKzNCa0NYNHR0Q1QvTTJOYmFVa3RQa0tCa0NCeEx5OStLTzRtRTBKRkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdSL3d1Z3NCT29Ua3JycDFIamt5eGZCWFZaV0lDWDNnb250RmViYWNHcjFGQmF4NzBhV0c1d2dqRjh4aDZoc21UT3FZQklScVM0YmIxTDlOZnhCK0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4MTE2MTY3MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDA4NTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"
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
