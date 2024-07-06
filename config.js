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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_33_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPR0UyV0V1ZVFLUHExMUJ6TXpwUHRQT2dSRlA5emV3WVMzSXliS0pKZU5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzOFQ3ZmJXSVNEZWFDdjhtcDA3bU53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1YjdiMjE5LTRjZTMtNGEzMi1iMTBhLTY5Yzc5ZGZiODRjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxMDEsXG4gICAgICA3MyxcbiAgICAgIDk2LFxuICAgICAgMzYsXG4gICAgICA5NixcbiAgICAgIDE5OCxcbiAgICAgIDExOCxcbiAgICAgIDU3LFxuICAgICAgMjEzLFxuICAgICAgNTQsXG4gICAgICAxMDcsXG4gICAgICAyMjksXG4gICAgICA3MixcbiAgICAgIDMzLFxuICAgICAgMjM2LFxuICAgICAgOTcsXG4gICAgICA0NSxcbiAgICAgIDY0LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxODksXG4gICAgICAyMTgsXG4gICAgICAxMDEsXG4gICAgICAxMCxcbiAgICAgIDU5LFxuICAgICAgMTM3LFxuICAgICAgMTYyLFxuICAgICAgMTYyLFxuICAgICAgNjQsXG4gICAgICAyMjQsXG4gICAgICAxOTIsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDE4OSxcbiAgICAgIDM0LFxuICAgICAgMTk3LFxuICAgICAgMTcyLFxuICAgICAgMjA3LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0JUSDM4MTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzcwMDEyMTcxMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0hBTUFOIEFMSSBQTk0gR1JPVVBcIixcbiAgICBcImxpZFwiOiBcIjIyNzMwMzA3NDMxMjI0NTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDaW1hQUhFTzZlcExRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRjl5OURkcmZPeTQ1Q3VlZTl5U3A4aXRkR2JjNFJueUhIelpjdjNXaEVRcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIdWhXT3FUQWhndkRYNCs1M3o1bmhJUEo5UjhYcnVTVGFHUjZ2bzM0YnJNQ2lUcWtiVjhJeERtRnZob3o4Z1Vsbmw3Ujl6dkFoL2dVWmxoVVJweWxBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyRDRRK2JydHlwdGw4ekxpelduT3NmTWF6YTltc3pLSjFqSkVDK2gveTFZSlY2M3dCSjlYdzlHbFhhT1RQYlIxdnhyd21NRTF3cVlva2xlRnZuVUdBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM3MDAxMjE3MTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTg0MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbG5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9sbi5qc29uIjogIntcImtleURhdGFcIjpcIkJmL3hMNngycVVvS0FXOVV0V2Q3NHAydlN2VkhpakdueVhuZWhKQnhxRmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NjU3MTAyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODgwNTUzMzI1M1wifSIKfQ=="  // PUT your SESSION_ID 


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
