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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_52_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImwzM2xGR3JDWUNBY1dzNnNoNmpEVE9DZEZRdVF2UVc5aTl3d2daZ2JSYkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFRcDlHS1VlUXpHR3QzbFpZaExXTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzc3ZWNkMzUtYmZjYS00ODJlLWJlNDYtNjQ4Njg5ZTdiMDFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjE4LFxuICAgICAgNDQsXG4gICAgICAxNTMsXG4gICAgICAxODQsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICAxNTQsXG4gICAgICAzNyxcbiAgICAgIDg5LFxuICAgICAgNTYsXG4gICAgICAyOCxcbiAgICAgIDgzLFxuICAgICAgMjAsXG4gICAgICAyNDksXG4gICAgICAyNTQsXG4gICAgICA5OCxcbiAgICAgIDE4MSxcbiAgICAgIDIyMSxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTEsXG4gICAgICAxMDMsXG4gICAgICA2NSxcbiAgICAgIDYyLFxuICAgICAgNTEsXG4gICAgICAxNTAsXG4gICAgICAyMDUsXG4gICAgICA3NCxcbiAgICAgIDE2MCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMyxcbiAgICAgIDE0MSxcbiAgICAgIDE0OSxcbiAgICAgIDI3LFxuICAgICAgMzYsXG4gICAgICA4OCxcbiAgICAgIDEzOCxcbiAgICAgIDEzNSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzSllKNENZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzkyMjQyOTc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDUwMDEzMTM5MzY2NzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQejhocFlERVA3OTU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN6T2FJTm9yTER1OUg1T1BYbzRGczF2eUkraGNNZnBkbFRTd2pMd1lEMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnFGUHZ6bnc4aUhqVnhjdnV6VGltOXQ1M2RocUxRSElSeWpGZXpCdjIwVGlNSVBlYTdKbW9uRTV3ZUExaU5CbHNOSkxqaUVDejlpNDk0b2RyNHQ2Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWkFDOUdoYjNReTYvSC9KdnpFcUh2VEVENHZMeHVEeXh5cUR3MXdtRWlLcG5rQ3crNFVEVlJ3K0lpaGIrQXhuL2dNZHRpa0tiNzZHZVltREhuTUY3aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDc5MjI0Mjk3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzY4MzIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnR2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4Q0RYOEpsMFlqb0JMVXN5TmY3YTFIYzYzN3lDcUxqRjBNSkNlaGFtek9nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MTU1ODAxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzY4MzI2ODg2XCJ9Igp9"
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
