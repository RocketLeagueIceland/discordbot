const { Client, Intents, MessageEmbed, MessageAttachment, Collection } = require('discord.js');
const nodeHtmlToImage = require('node-html-to-image')
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');
const { google } = require('googleapis');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //Setting up the bot variable. In the discord.js doc you will see they use "client". It's similar but I prefer to use bot.
const CONFIG = require('./config.json'); //Including our config.json file will give us the possibility to use the informations it contains.

const streamersSpreadsheetId = "19vqDFkD83C4Ev5hXwGpW_vDTQ75IMR9ElqZ-2MiCRZw";

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

function isGameDay() {
  const specialDays = [
    '2023-04-11',
    '2023-04-13',
    '2023-04-18',
    '2023-04-20',
    '2023-04-25',
    '2023-04-27',
    '2023-05-11',
    '2023-05-13',
    '2023-05-14'
  ];

  firsturslit = ['2023-04-30'];

  const today = new Date();
  const formattedDate = today.toISOString().substring(0, 10);

  let returnValue = specialDays.includes(formattedDate) ? 'https://tenor.com/view/yes-nicken-gif-25213050' : 'https://tenor.com/view/no-way-dude-no-oh-bugs-bunny-bugs-gif-22941840';
  returnValue = firsturslit.includes(formattedDate) ? 'https://tenor.com/view/i-mean-yeah-kind-of-sort-of-yes-gif-16557123' : returnValue;
  return returnValue;
}


client.on("messageCreate", async (message) => {

  if (message.content == '!stormur') {
    message.reply("Stormur er heiti vindhraðabils, sem svarar til 9 vindstiga (20,8 - 24,4 m/s) á vindstigakvarðanum (Beaufortskvarðanum). Veðurstofan gefur út stormviðvörun, þegar spáð er vindhraða yfir 20 m/s.")
  }
  if (message.content == '!kartoflan' || message.content == '!kartofla') {
    message.reply("Kartoflan er heit! Kartofla hefur verið að sjá um liquipedia síðu fyrir RLÍS deildina. Checkaðu á henni hér: https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_6/League_Play.")
  }
  if (message.content == '!mammsa') {
    message.reply("MÓÐIR ALLRAR TÖLFRÆÐI")
  }
  if (message.content == '!isitgameday') {
    message.reply(isGameDay())
  }
  if (message.content == '!isitvaddimah') {
    const attachment = new MessageAttachment('Vaddimah.mp4');
    const messageAttach = {
      files: [attachment],
    };
    // message.channel.send('Always has been:', message);
    message.reply({
      content: 'Always has been:',
      files: [attachment],
    });
  }
  if (message.content == '!hannerflippari') {
    const attachment = new MessageAttachment('dingo.jpg');
    const messageAttach = {
      files: [attachment],
    };
    // message.channel.send('Always has been:', message);
    message.reply({
      content: '"Im gonna be a father!!!" - circa 1999:',
      files: [attachment],
    });
  }
  // if (message.content == '!dingo') {
  // let url = "https://api.tracker.gg/api/v2/rocket-league/standard/profile/steam/dingoremote"
  // const { data } = await axios.get(url,
  //   {
  //     headers: {
  //       'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
  //     }
  //   });


  // onevoneRating = data.data.segments.find(o => o.attributes.playlistId == 10).stats.rating.value
  // twovtwoRating = data.data.segments.find(o => o.attributes.playlistId == 11).stats.rating.value
  // threevthreeRating = data.data.segments.find(o => o.attributes.playlistId == 13).stats.rating.value
  // hoopsRating = data.data.segments.find(o => o.attributes.playlistId == 27).stats.rating.value
  // }
  // if (message.content == '!leaderboard') {
  //   message.reply("https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is")
  // }
  if (message.content == '!hjálp') {
    const exampleEmbed = new MessageEmbed()
      .setColor('#1c2e4a')
      .addField('!stormur', 'Prófaðu bara ef þú þorir.' || '.', true)
      .addField('!kartoflan', 'Prófaðu bara ef þú þorir.' || '.', true)
      .addField('/roster', 'Sýnir hlekk að 3v3 ranked lista yfir íslandi.', true)
      .addField('/leaderboard', 'Sýnir ranked lista yfir íslandi fyrir valinn playlist.', true)
      .addField('/staðan', 'Til að sjá núverandi stöðu í Arena deildinni.', true)
      .addField('/addstreamer', 'Hægt er að sækja um að láta bottann láta vita þegar þú ferð live á twitch. Sóttu um með þessu command.', true)
    let text = 'commands'
    message.reply({ content: text, embeds: [exampleEmbed] });
  }
});

client.on('ready', async () => { //When the bot is ready, we do. the following things:
  client.user.setStatus('online'); //Telling discord we are online.
  client.user.setActivity("!hjálp fyrir commands."); //Setting our dicord "playing" status to a defined text
  console.log(`Logged in as ${client.user.tag}`); //Sending a message into the console saying that we are logging in as (usertag). Can be usefull when you have multiple bots running on the same machine
  console.log('Bot is connected...');

  streamCheckerSheetsVersion();
});

const streamCheckerSheetsVersion = async () => {

  setInterval(async () => {

    try {

      const sheetRange = 'streamers!A2:B150'

      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });

      // Create client instance for auth
      const googleClient = await auth.getClient();

      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: googleClient });

      // Read rows from spreadsheet
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: streamersSpreadsheetId,
        range: sheetRange,
      });

      let sheetStreamers = [];
      for (i = 0; i < getRows.data.values.length; i++) {
        let sheetStreamer = {
          "streamer": getRows.data.values[i][0].toLowerCase(),
          "isOnline": getRows.data.values[i][1] == 'TRUE' ? true : false
        }
        sheetStreamers.push(sheetStreamer);
      }

      const authurl = `https://id.twitch.tv/oauth2/token?client_id=${CONFIG.twitchClientId}&client_secret=${CONFIG.twitchSecret}&grant_type=client_credentials`;
      let { data } = await axios.post(authurl);
      token = data.access_token;

      const header = {
        'Client-ID': CONFIG.twitchClientId,
        'Authorization': `Bearer ${token}`
      };
      streamerurl = `https://api.twitch.tv/helix/streams?user_login=wolf_masterz`;

      let onlineStreamer = []

      // collect streamers that are offline and online
      for (i = 0; i < sheetStreamers.length; i++) {
        if (!sheetStreamers[i].isOnline) { // or streamer was online less than an hour ago or something.
          let streamer = sheetStreamers[i].streamer;
          streamerurl += `&user_login=${streamer}`;
        } else {
          onlineStreamer.push(sheetStreamers[i].streamer)
        }
      }

      console.log(`streamers online already according to file count: ${onlineStreamer.length}`)

      let res = await axios.get(streamerurl, { headers: header });
      data = res.data.data;
      console.log(`Not offline but currently streaming according to twitch: ${data.length}`)

      // send message for all streamers that just went online
      for (i = 0; i < data.length; i++) {
        let streaminfo = data[i];
        let isMature = streaminfo.is_mature;
        if (isMature) continue;
        let game = streaminfo.game_name;
        if (game != 'Rocket League' && game != 'Just Chatting') continue;
        let userid = streaminfo.user_id;
        let streamerName = streaminfo.user_login.toLowerCase();
        let title = streaminfo.title;
        let viewerCount = streaminfo.viewer_count;
        let preview = streaminfo.thumbnail_url.replace('{width}', '1920').replace('{height}', '1080')
        let url = `https://www.twitch.tv/${streamerName}`
        let [res2, res3] = await Promise.all([axios.get(`https://api.twitch.tv/helix/users/follows?to_id=${userid}&first=1`, { headers: header }), axios.get(`https://api.twitch.tv/helix/users?id=${userid}`, { headers: header })]);
        let logo = res3.data.data[0].profile_image_url
        let followers = res2.data.total

        const exampleEmbed = new MessageEmbed()
          .setColor('#1c2e4a')
          .setTitle(streamerName || '.')
          .setURL(url || '.')
          .setAuthor(streamerName || '.', logo || '.')
          .setDescription(title || '.')
          .setThumbnail(logo || '.')
          .addField('Game', game || '.', true)
          .addField('followers', `${followers}` || '.', true)
          .addField('viewers', `${viewerCount}` || '.', true)
          .setImage(preview || '.');
        let text = '**' + streamerName + '**' + ` er með útsendingu í leiknum ${game}. Fylgist með hér: ${url}`
        if (game === 'Just Chatting') {
          text = '**' + streamerName + '**' + ` er með útsendingu og er bara að spjalla. Fylgist með hér: ${url}`
        }
        const channelID = '738015390042554489';
        // const channelID = '738089976931156019'; // channel for testing
        const channel = await client.channels.fetch(channelID);
        channel.send({ content: text, embeds: [exampleEmbed] });

        let index = sheetStreamers.map(function (element) { return element.streamer.toLowerCase(); }).indexOf(streamerName.toLowerCase());
        console.log(index);
        console.log(sheetStreamers[index]);
        sheetStreamers[index].isOnline = true
        console.log(`streamer ${sheetStreamers[index].streamer} is now online.`)
      }

      // create url for checking if streamers that were online are still online
      streamerurl = `https://api.twitch.tv/helix/streams`;
      for (i = 0; i < onlineStreamer.length; i++) {
        if (i == 0) {
          streamerurl += `?user_login=${onlineStreamer[i]}`;
        } else {
          streamerurl += `&user_login=${onlineStreamer[i]}`;
        }
      }

      res = await axios.get(streamerurl, { headers: header });
      data = res.data.data;

      let stillOnline = []
      for (i = 0; i < data.length; i++) {
        let streamerName = data[i].user_login
        stillOnline.push(streamerName)
      }

      // filter streamers that were online, but went offline
      let notOnlineAnymore = onlineStreamer.filter(n => !stillOnline.includes(n))

      // set streamer as offline who just went offline
      for (i = 0; i < notOnlineAnymore.length; i++) {
        console.log(`streamer ${notOnlineAnymore[i]} just went offline`)
        let index = sheetStreamers.map(function (element) { return element.streamer.toLowerCase(); }).indexOf(notOnlineAnymore[i].toLowerCase());
        sheetStreamers[index].isOnline = false;
      }

      // convert sheetStreamers for sheets
      let convertedSheetStreamers = []
      for (i = 0; i < sheetStreamers.length; i++) {
        convertedSheetStreamers.push([sheetStreamers[i].streamer, sheetStreamers[i].isOnline])
      }

      // save newest iteration to google sheets

      // Write row(s) to spreadsheet
      await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId: streamersSpreadsheetId,
        range: sheetRange,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: convertedSheetStreamers,
        },
      });
    }

    catch (error) {
      console.log(error)
    }
  }, 60000);

}

//Bot Logins
client.login(CONFIG.token); //Logging in: will use the token contained into the config.json to connect to the discord a