const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //This is the new variable for controlling status seen.
global.autoreadgc = false;


//
global.prefa = ["."];                                    //Default prefix here. you can change if you want.


//
global.Owner = ["+923010405688", "+923010405688"];         //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.OwnerNumber = ["+923010405688", "+923010405688"];   //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.ownertag = ["+923010405688"];
global.OwnerName = "SACHITH";
global.BotName = "SACHITH";
global.packname = "🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋";                             //Do not change.
global.author = "SACHITH";                               //Do not change.
global.BotSourceCode = "https://github.com/Kai00"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/GhRGdwfaMVDCoeAdzILfl";


//
global.sessionName = "CYPHER-X:~UEsDBBQAAAgIAGWEtlrpXTZL0wQAAJwIAAAKAAAAY3JlZHMuanNvbq1Vy47iRhT9l9qCpv3GhdRS*ALM24BtmiiLwi4*wC*KZYwZscpHZJFVPiP5mkjJh0SG7sxImcx0pHhVvi7fOufec259BFkel3iCG9D*CAoSnxHF7ZI2BQZ9oFZBgAnoAh9RBPrAHdqzXr61Uu04g+jQyUP55GqKsa+vhw709lPzODyNcColzDO4dUFR7ZPY+0rC5ZLI4YqdWXlmMY4KJ5NCPgqrBhf8joPhvlrrjXOxTrZxfAa3NiOKSZyFRhHhFBOUTHCzRDF5H*zhdJtEh60mCpcwYuF2J3SCQzHcaFkunE9RwKe5BNP5QXLL98HXjM3WmAp40OEag31ZRJXtDCeH62qchsYkWAVOM9vZF1pdvQf8Mg4z7Js+zmhMm3fXvR6NCmUzlDeMGHcko0GTBRm7tWZKrr46jbUdqUQU8Jo7yt8H3Jq6kufvHS2dRPCwP*Wal+owOrD1VbdkS9RhJNUaeVk5ivw58CV508rxv9S9nI4oz7iR*7T0s2lOLVfqebrFh*YVGgumJ0iXzlyc6Yptvg8+ZaAx4nvq1h5rBzY+DiyzyezM7HG7wxyp*uZgsLk16I1WzCf4iFbkqyg3zA51SMANhC3bMHwnil3T4au5jJTp2dho9rHarIzIW*B4m9SqaW1fdvZC94bnHG+nPNSnsw2jqWi8alxzvLhKqaUrz3dGR9yYPuizty4gOIxLShCN86yNcQLsAuSf19gjmN7LC8xBKajrSM*jQQdXkki8JjEUGcXoLIcrTtf2a6Qe4wQv5GfQBQXJPVyW2B*FJc1JM8NliUJcgv739061pAlOc4rHsQ*6AHI8wzICI0qy*F35oY4QLVFRfMgwBV0QkDydYdCnpMJd8PhhoKgsZBlVVhWoSaLCK7LOsozaU8UB5GFLMX0cuolTXFKUFqDP9oQe5NkeI9+6*w8OQ2Q0RWN4CBVWgCzDilDXe7AnsEJPVXnpGzjg7YcuyPCFPnTcVp9nuyCISUntrCqSHPlvIn*7iDwvrzK6bjJPaxeYgP5nYUxpnIVly6zKEPGi+Iy1lgfoBygp8d8NxwT7b1xeh5iW+60ORXezk7biGrTY20T*qE0ffqE8yX0bD0VelDgJyqIAYbuxjXdBhtpc4M*fflJcxVz**uvPM2VqTv748Ze2Rq*o28N8TFGclO0wm4+KSylrxqQ6nj1jOFSMUNFCBXxi++aih0rhBVrLdFWftsc6YmQvKU*7yLGCxf4kb3ARzs*Okzzgtj4XPn8hCeiD9Y6KC+RzRTSn8xdzNt6gI4qd3ONkHI6LJ8+WdtvOcS2Z06dpfXGHcr5QmbUk6TPT8mbGfOicF0rQ9F7mqMYCcgcL4265LvDxOfbw54c5Ky7evDjjQluFO24*0Wgwvdjish5ITxvTMYOhVGadDq0vPunIg*1+u0TJSlqmOWcv6r1ao2pcX93gxF1W5Mwb+cCJtFd*3+dL8jrX41fnxffXIMb3MfnakW*29QG8lR9z636W43Xw*svwUgMvsHXx6E0ScWb6y9F4P0kFxx5dU+ls8KcXfc8GT6qf8H4Obq0PigTRICcp6AOU+SS*y4bkVatnMwvyr117qmkq4YN5gkqqfPLIl2wnPnYtSV6MUBm11757FNVW741SFGuK6JvjgNI+kzMLbn8BUEsBAhQDFAAACAgAZYS2WuldNkvTBAAAnAgAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA+wQAAAAA";                          //Do not change.


//
global.openAiAPI = "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";


//
global.location = "HambanThota, Sri Lankan";
global.reactmoji = "💞";
global.themeemoji = "😂";
global.vidmenu = { url: 'https://tenor.com/en-CA/view/anonymous-hacker-smooth-gif-10171911193797826570%9D%90%95-12-14' };
global.websitex = "https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD.V.0.4";
global.lolhuman = "Sachith";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
  jobdone: 'Here you go...',
  useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
  botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
  botowner: 'Only my *Owner* can use this command, Baka!',
  grouponly: 'This command is only made for *Groups*, Baka!',
  privateonly: 'This command is only made for *Private Chat*, Baka!',
  botonly: 'Only the *Bot itself* can use this command!',
  waiting: 'Just Wait...',
  nolink: 'Please provide me *link*, Baka!',
  error: 'An error occurd!',
  banned: 'You are *Banned* fron using commands!',
  bangc: 'This Group is *Banned* from using Commands!',
  nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'

}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
