//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    await whatsbot.Economy.findOne(
      {
        Id: whatschat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return whatsbot.handlerror(whatsbot, whatschat, error);
        }

        if (!userEco) {
          let newUser = new whatsbot.Economy({
            Id: whatschat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return whatsbot.handlerror(whatsbot, whatschat, error);
          });
          return await whatsbot.imagebutton(
            whatsbot,
            whatschat,
            `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            "./public/whatsbot.png"
          );
        } else {
          await whatsbot.Zoology.findOne(
            {
              Id: whatschat.sender,
            },
            async (error, userZoo) => {
              if (error) return Caught(ӄryӄnz, whatsbot, error);
              if (!userZoo) {
                new whatsbot.Zoology({
                  Id: whatschat.sender,
                  zoodone: Date.now(),
                  zootimeout: 1800000,
                })
                  .save()
                  .catch((error) => {
                    return whatsbot.handlerror(whatsbot, whatschat, error);
                  });
                return await whatsbot.imagebutton(
                  whatsbot,
                  whatschat,
                  `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
                  "./public/whatsbot.png"
                );
              } else {
                if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                  let time = whatsbot.ms(
                    userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                  );
                  return await whatsbot.imagebutton(
                    whatsbot,
                    whatschat,
                    `*🔖Here, ${finalname} for @${
                      whatsbot.Tname || whatsbot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    "./public/whatsbot.png"
                  );
                } else {
                  let zooId = Math.floor(Math.random() * 10) + 1;
                  let rarity;
                  if (zooId < 5) rarity = `small`;
                  else if (zooId < 8) rarity = `medium`;
                  else if (zooId < 9) rarity = `big`;
                  else if (zooId < 10) rarity = `large`;
                  else rarity = `legendary`;
                  let anim = whatsbot.animals[rarity];
                  let worth =
                    Math.floor(Math.random() * (anim.max - anim.min + 1)) +
                    anim.min;
                  userEco.money = userEco.money + worth;
                  userZoo.zoodone = Date.now();
                  userZoo.zootimeout = 1800000;
                  userZoo.save().catch((error) => {
                    return whatsbot.handlerror(whatsbot, whatschat, error);
                  });
                  return await whatsbot.imagebutton(
                    whatsbot,
                    whatschat,
                    `*🔖Here, ${finalname} for @${
                      whatsbot.Tname || whatsbot.pushname
                    }:*
🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`,
                    "./public/whatsbot.png"
                  );
                }
              }
            }
          );
        }
      }
    );
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
