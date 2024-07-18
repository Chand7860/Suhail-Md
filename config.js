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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_31_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSDFzN0lLbGZNYXdZL1VoWTV4OGxrQ0NENTVXWVlKYXdnck8vcEJaS0RyOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwialJoQkptdy1SM09fcC1LOTBFczZRQVwiLFxuICBcInBob25lSWRcIjogXCI5YjQ5NDliNS1kY2RhLTQ1NjMtODQ4Yi1iODE1Y2IxOTI2MzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMjM5LFxuICAgICAgODQsXG4gICAgICAxODAsXG4gICAgICAzNyxcbiAgICAgIDEzNCxcbiAgICAgIDIxNCxcbiAgICAgIDE3NixcbiAgICAgIDg3LFxuICAgICAgNDAsXG4gICAgICAyMjMsXG4gICAgICAxMTMsXG4gICAgICAxNDgsXG4gICAgICAxMDcsXG4gICAgICAxMDMsXG4gICAgICAyMDMsXG4gICAgICAxNTMsXG4gICAgICA1MixcbiAgICAgIDg0LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNTcsXG4gICAgICAxMzAsXG4gICAgICAyNTMsXG4gICAgICAxODksXG4gICAgICAyNDUsXG4gICAgICA5MSxcbiAgICAgIDEzNCxcbiAgICAgIDUzLFxuICAgICAgNCxcbiAgICAgIDQyLFxuICAgICAgMTEsXG4gICAgICAyMDUsXG4gICAgICAyMjgsXG4gICAgICA0NSxcbiAgICAgIDYwLFxuICAgICAgMjA0LFxuICAgICAgMTQ5LFxuICAgICAgMTcxLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlhDVjk1WVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ4MTE2MTY3MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjYxODM5MTQwMDY1Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TL3hxUUJFS1dXNUxRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUJwNWlpZ1Fuc244Y1I5Z3A5NmltK0RpRHBIbEVBbjRSWElFdnBXSWN6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzSVB1TkhBTGlXN1ZnbVpjckFkdU5BRng5QWsrQTQ2czkrbkZ4Q0wxZ3cvNThiOS9pUGNmVGxNYU4rM3R6bVdMc3pOaElLTEoxckJ5YUVueTJvU0lBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZSzNkMnpBaFJOc28rMkFianI1RlE3N2orc3JMd2dJT1JYc1hlSE9vN0swMzJyV25KZ2xSbldKVHhFb2NMSlBOMFYxYW5uV0VMZFZuY0RJQ3d3K1NpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0ODExNjE2NzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzA1ODk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHN6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMc3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRdUtGb00xTnRvODZvakIvYlZCT0QyTDVRZW82WVM3STBsVS9aTVRkdU9VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTA4Nzk0MCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"
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
