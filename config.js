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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_54_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaNHE3cTlZcSsreEw2ZldDSExHdUFwVXk1bnZZTVlGcFdkbmhJZkpQSEJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkT0cxSm1EMlM0MnBReXE5TG9CdTBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlOWI3NmNlLWY2ZjItNGU0My1iZWQ5LWU0ZDdkYTY0MmU5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgMTgxLFxuICAgICAgNSxcbiAgICAgIDEyOSxcbiAgICAgIDEzMyxcbiAgICAgIDIyNSxcbiAgICAgIDEzNCxcbiAgICAgIDExOCxcbiAgICAgIDIxOCxcbiAgICAgIDI1MCxcbiAgICAgIDE5LFxuICAgICAgMTEsXG4gICAgICAxMjgsXG4gICAgICA4OCxcbiAgICAgIDEzMixcbiAgICAgIDIxNCxcbiAgICAgIDYsXG4gICAgICA3MyxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICA4OSxcbiAgICAgIDEyLFxuICAgICAgMjAsXG4gICAgICAyMDQsXG4gICAgICAxNDksXG4gICAgICAyMDYsXG4gICAgICA1OCxcbiAgICAgIDc1LFxuICAgICAgNzAsXG4gICAgICAzNyxcbiAgICAgIDI0LFxuICAgICAgMTg3LFxuICAgICAgMjA3LFxuICAgICAgMjI5LFxuICAgICAgMSxcbiAgICAgIDE3NCxcbiAgICAgIDEzNixcbiAgICAgIDEyLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY4aHBZREVQTGI0clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjek9hSU5vckxEdTlINU9QWG80RnMxdnlJK2hjTWZwZGxUU3dqTHdZRDFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFyUnl0VFp3Q2NXMXpoTnhuMmJ3OTBEQW5LVUZ2S0NxZTdYRk91ZlJWc3RUa1liZzJIMEhyQXhxb21SK0dQQ3B6bUpTOHo5VFNBQjliRDErYUxzS0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjB4ekZLcCthMmtpUnQ0MVRtV3VrQXBUN0ttVmVHb3JBVC9qeDI5TlNxci9BeVBoc0hGOGNRK1FnOG5wU2hwczFMY2hRREtNTkNnejdqdTRLVjJPRWhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc5MjI0Mjk3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ1MDAxMzEzOTM2Njc6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NzkyMjQyOTc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyODIwMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNT3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PMC5qc29uIjogIntcImtleURhdGFcIjpcInhDVWgyYk0xdTk3QXlkUENxUU1MdDdFVVp2SVEzM0pjZzVhRnVxTWlac3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMTk5Nzc4ODEwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU8xLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR1J2bmRUenVLcHI1UVFmbjlWeWZ1cnJSWUZ1TzcrN0R5cng1UUFnaFU5ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTE1NTgwMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PMi5qc29uIjogIntcImtleURhdGFcIjpcInpUTE9OVkdPandpZ1d4TjFhaTYwbWVPT3pUekZ1aEZmTW5FMHF1cTMyYUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjc2NDUyMTE4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU8zLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzNEcEpubkFvQ2h2cnNTazg2YXV2RmlYWWZBUEVlUkVwaHBwb1lyOXdqWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTE1NTgwMTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PNC5qc29uIjogIntcImtleURhdGFcIjpcInhhSU9wQ2VpSHAvU2RSZmdzT0hta1lsUk9aOHlYaVhQa0V2ZGhSU2Nvcjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUxNTU4MDEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjgwMzc3NDg5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU96Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZzhacTNRQ2Z1c1FpamhVNFNWNmNMc1JLUXBTVWN1R3o1RE9MRWlVM3o5MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTE1NTgwMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="

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
