("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
let ӄօʟօʀ = require("chalk");
let ɢɪᴛ = require("simple-git")();
let ɴᴇᴡ = ɢɪᴛ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (ɴᴇᴡ.total != 0) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("⬡═════════════════════════|▷ 𝐆𝐢𝐭𝐇𝐮𝐛 𝐒𝐲𝐧𝐜 ◁|═════════════════════════⬡")));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("🐙𝐂𝐨𝐦𝐦𝐢𝐭𝐬: "),ӄօʟօʀ.bgMagenta(ɴᴇᴡ)));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgYellow("Starting Git-Pull")));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("🕐𝐓𝐢𝐦𝐞: "),ӄօʟօʀ.bgGreen("".concat(new Date()))));
ʀᴇᴅ = require("child_process").exec("rm -f ./.git/index.lock");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git reset --hard");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git stash");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git stash drop");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git pull");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("npm restart");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgGreen("Git-Pull Finished")));
} 
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
