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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_43_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSHltWTF3azhpbXNtZVVlTFpyL0NtWnZhRzRmK24xNlBLQm9qeVZLTUVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBNzJYcThua1RNMnZjcEluYnBHdU9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3YjYyN2QyLTY0Y2UtNDljNi1hMDBkLTc0YWRjNWEwMDkyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxNDEsXG4gICAgICAyMTgsXG4gICAgICAxNzIsXG4gICAgICAxMjQsXG4gICAgICA4MixcbiAgICAgIDE0OSxcbiAgICAgIDU3LFxuICAgICAgMTcxLFxuICAgICAgMTM5LFxuICAgICAgNjYsXG4gICAgICA3LFxuICAgICAgMjAyLFxuICAgICAgMjI2LFxuICAgICAgMTg2LFxuICAgICAgMTcwLFxuICAgICAgMTYsXG4gICAgICAxNTAsXG4gICAgICAxMzQsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNzEsXG4gICAgICA4NCxcbiAgICAgIDE5NCxcbiAgICAgIDE5OSxcbiAgICAgIDQ2LFxuICAgICAgNTksXG4gICAgICAxMTUsXG4gICAgICAyNDMsXG4gICAgICA2NCxcbiAgICAgIDE1MixcbiAgICAgIDEwNSxcbiAgICAgIDI3LFxuICAgICAgMjA2LFxuICAgICAgMzksXG4gICAgICAxMzUsXG4gICAgICAxNTQsXG4gICAgICA5OCxcbiAgICAgIDE2NyxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNExBWTVGU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjA3MDY2ODY1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjY4MTU1MDExNDkzNzoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdnQyOE1ERU11NjRyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklKREVsTEdUTEEwTGtBb3lwQjRucGs1eWU0bCszdGlpdzZLbnNqOTJrSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0p5VkgzY3NVRWRLV3hNeEl3ZzlCYm13SDNEVHY2NXdhZGtYR1g1d290TkczM3loQTVRclJPZldqQUl5VUdZcXNIb1gyTVc5Z09obUZHNFRLWFZVQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSDBiVExLNm93dGdBSVZoZkpFTENUdnA1dFBpelRNWkdPbyt0QzhGMFpKSEhoaVpmc0VwS0c4VDNraVh6eVlNNGg5RXBoVjBBS0hUU3JtNndTNDExaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjA3MDY2ODY1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNzc3NzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
