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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_43_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWtvL0Q1U0pRanhubWpDbVBKcjFDY3ByZUFuclFMTW1BWlVDZW1mcHdBcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMTU4NDc1NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZBQzUwMkQxQzM1RjVCQkNBN0QwQ0EyQjM0RkMwNjVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI4MTM4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExNTg0NzU3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE5MDM4NTk0RUUxRURDODIxMjU2OThDOUM3QkE2NzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjgxMzg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImREd3ZOUldGUlBDU0k1V2JqTW1JeWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmJmZmY5Y2MtOTdkMy00MmNmLTlmY2MtZTg4MzU4ZTE3NDI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDEzOCxcbiAgICAgIDE3NCxcbiAgICAgIDE3MixcbiAgICAgIDMyLFxuICAgICAgMjAzLFxuICAgICAgNTcsXG4gICAgICAzNSxcbiAgICAgIDE2MixcbiAgICAgIDIzMCxcbiAgICAgIDEwNSxcbiAgICAgIDE0OSxcbiAgICAgIDQzLFxuICAgICAgMTEsXG4gICAgICAzMixcbiAgICAgIDE1NSxcbiAgICAgIDIzOCxcbiAgICAgIDk1LFxuICAgICAgMTQ4LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDE1MCxcbiAgICAgIDEyMyxcbiAgICAgIDQzLFxuICAgICAgNTEsXG4gICAgICAyNTUsXG4gICAgICA0NyxcbiAgICAgIDI0NyxcbiAgICAgIDIwOSxcbiAgICAgIDQzLFxuICAgICAgMTk1LFxuICAgICAgMTI4LFxuICAgICAgMTI5LFxuICAgICAgMzksXG4gICAgICAxNCxcbiAgICAgIDIxMCxcbiAgICAgIDE4MSxcbiAgICAgIDc5LFxuICAgICAgMjA0LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEdTQTZGVzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNTg0NzU3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NzkwODY0NDkyNTU3MzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkKzMhMqI4bOQyorNm+KEmMmq4bOS4bOUROGzn+GzoiB6zJHMiPCdm4bMvfCdm4bMvfCdkKxob3dcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMlhpNEFFRU9iVzRyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1ob081YjM3T1owZXg5L0hlRVRXRi9xTmNURXA5Z1c1WWhKMVVrZGsrVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUxzYTIvd1lNbnZHdFRNbFNPRWFBWW51RFo3SndxNnJteUkzS3JnL09LTEFFbDFpZEF4aWx4Y3gwY0dEU3k1T3pQR3FmaFk2QisxM1FwNmV6QzRYRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMkI0UzY3YkJRWXZDeUFlN3dxNVM0SE1ZZTI1ekhwWDJDaGpNR084V2lpdjVOdUp3MURiYmViejdCQktpYklTQ2I5TExHc0wxdlhtbFozdjBrbG9uQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTE1ODQ3NTc1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI4MTM4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlBNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUE2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0xQVjJST2NXYXpIclVSUU1EeFhNbUFOci9ibHFEZFlDcTYwTTN3K0p3Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDczOTI1MDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyODEzODYxMDNcIn0iCn0="
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
