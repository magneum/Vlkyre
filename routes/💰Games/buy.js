// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    let Item;
    let NewLimit;
    let ItemPrice;
    const BadgeCatelog = [
      "🥉Bronze 20 Commands",
      "🥈Silver 40 Commands",
      "🥇Golden 60 Commands",
      "💍Platinum 80 Commands",
      "💎Diamond 100 Commands",
    ];
    const BadCatelog = ["bronze", "silver", "gold", "platinum", "diamond"];
    const RobCatelog = ["sword", "laptop", "charm"];

    if (ѕуηтнσяiα.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (ѕуηтнσяiα.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (ѕуηтнσяiα.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (ѕуηтнσяiα.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (ѕуηтнσяiα.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (ѕуηтнσяiα.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (ѕуηтнσяiα.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (ѕуηтнσяiα.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (ѕуηтнσяiα.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (ѕуηтнσяiα.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (ѕуηтнσяiα.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (ѕуηтнσяiα.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (ѕуηтнσяiα.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!ѕуηтнσяiα.args) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} item_
> _You may use ${ѕуηтнσяiα.prefix}shop to look for items..._`
      );
    }

    if (ѕуηтнσяiα.args.length === 0) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} item_
> _You may use ${ѕуηтнσяiα.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(ѕуηтнσяiα.args[0])) {
      ѕуηтнσяiα.Economy.findOne(
        {
          ID: νℓкhat.sender,
        },
        async (error, userEco) => {
          if (error) {
            return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          }

          if (!userEco) {
            let newUser = new ѕуηтнσяiα.Economy({
              ID: νℓкhat.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser.save().catch((error) => {
              return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
            });
            return await ѕуηтнσяiα.imgB(
              ѕуηтнσяiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
              "./src/voxbot.jpg"
            );
          }
          ѕуηтнσяiα.Robbery.findOne(
            {
              ID: νℓкhat.sender,
            },
            async (error, userRob) => {
              if (error) {
                return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
              }
              if (!userRob) {
                new ѕуηтнσяiα.Robbery({
                  ID: νℓкhat.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./src/voxbot.jpg"
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(ѕуηтнσяiα.args[0])) {
      await ѕуηтнσяiα.Economy.findOne(
        {
          ID: νℓкhat.sender,
        },
        async (error, userEco) => {
          if (error) {
            return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          }

          await ѕуηтнσяiα.Bagde.findOne(
            {
              ID: νℓкhat.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
              }

              if (!userEco) {
                new ѕуηтнσяiα.Economy({
                  ID: νℓкhat.sender,
                  money: 0,
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (!userBadge) {
                let newBagdeUser = new ѕуηтнσяiα.Bagde({
                  ID: νℓкhat.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                });
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userEco.money < ItemPrice) {
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userBadge.Badge === Item) {
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./src/voxbot.jpg"
                );
              }

              if (
                userEco.money > ItemPrice &&
                BadgeCatelog.includes(Item) &&
                NewLimit > 0
              ) {
                userEco.money = userEco.money - ItemPrice;
                userBadge.Limits = NewLimit;
                userBadge.Badge = Item;
                await userEco.save().catch((error) => {
                  return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                });
                await userBadge.save().catch((error) => {
                  return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                });
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  "./src/voxbot.jpg"
                );
              }
            }
          );
        }
      );
    } else {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} item_
> _You may use ${ѕуηтнσяiα.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
