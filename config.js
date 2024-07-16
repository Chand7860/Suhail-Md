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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50937260964";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_58_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDUwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZQcnkrUWFiUnVtSjM4OVFEbmUvTjVpNVczMGR1Rm40RFFldm8wdTBQS3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRJaktENUJLVFgyUnNjYndJcGs5RGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDBmOGU2ODYtZjQzNC00MDk4LThkNzctYjA0ZjEzNTVhMTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE4OSxcbiAgICAgIDIxNixcbiAgICAgIDE0MCxcbiAgICAgIDE4OSxcbiAgICAgIDI0NSxcbiAgICAgIDIwLFxuICAgICAgNDksXG4gICAgICAxMTgsXG4gICAgICAyMDMsXG4gICAgICAyNDYsXG4gICAgICAyNixcbiAgICAgIDEwMixcbiAgICAgIDIwMSxcbiAgICAgIDgsXG4gICAgICA2OSxcbiAgICAgIDE2MixcbiAgICAgIDEzNSxcbiAgICAgIDE0NixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxMjAsXG4gICAgICA0NyxcbiAgICAgIDQxLFxuICAgICAgNDAsXG4gICAgICA3MCxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgMTAyLFxuICAgICAgNyxcbiAgICAgIDUwLFxuICAgICAgOTYsXG4gICAgICA1MyxcbiAgICAgIDE2MyxcbiAgICAgIDIxNCxcbiAgICAgIDEzLFxuICAgICAgNCxcbiAgICAgIDU4LFxuICAgICAgMjQ2LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdNUkg5WE1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODExNjE2NzA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzY2MTgzOTE0MDA2NTM6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUy94cVFCRUxQczJMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFCcDVpaWdRbnNuOGNSOWdwOTZpbStEaURwSGxFQW40UlhJRXZwV0ljelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnhTM01QbDE3NFp3aDRPdXFybVIyRlloSk02dUw0RlBjamU0K1d0dkNINlEwYkVUNnlML0kwLzc0Zk1YaGhZOTNCL0RFRXd0SEdmZ1VPamowNUFQQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWRHOTB1Ymdacm9QcGJuRGFBMTJUQnBEQnNmcE9kRVRkVFRTK3p2eWM4TEV6Tzc5bW1KSzVjV1ZUOS8xL3Z4TTdhMnZ0ME1VM2twanc4NTZQZFlSaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDgxMTYxNjcwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTEyMDMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxzeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHN4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZzdFTkFFbmJSdmg0dUZlTmRmRWZISzRNZFZseXB4R3diVWg4dFd6b0djcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDUwODc5NDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA0NzkzMDYyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
