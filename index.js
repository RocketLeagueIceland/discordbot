const { Client, Intents, MessageEmbed, MessageAttachment, Collection } = require('discord.js');
const nodeHtmlToImage = require('node-html-to-image')
const axios = require("axios");
const cheerio = require("cheerio");
const request = require('superagent');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //Setting up the bot variable. In the discord.js doc you will see they use "client". It's similar but I prefer to use bot.
const CONFIG = require('./config.json'); //Including our config.json file will give us the possibility to use the informations it contains.

//Setting up a prefix variable
const prefix = CONFIG.prefix; //In this example, I'm setting up the prefix in the config.json. I could have simply used "const prefix = '!';"

let rawdata = fs.readFileSync('streamers.json');
let streamers = JSON.parse(rawdata);
let currentStreamerIndex = 0;

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
  

client.on("messageCreate", async (message) => {

  if (message.content == '!stormur') {
    message.reply("Stormur er heiti vindhraðabils, sem svarar til 9 vindstiga (20,8 - 24,4 m/s) á vindstigakvarðanum (Beaufortskvarðanum). Veðurstofan gefur út stormviðvörun, þegar spáð er vindhraða yfir 20 m/s.")
  }
  if (message.content == '!kartoflan') {
    message.reply("Kartoflan er heit! Kartofla hefur verið að sjá um liquipedia síðu fyrir Turf deildina. Checkaðu á henni hér: https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_3/League_Play.")
  }
  if (message.content == '!mammsa') {
    message.reply("MÓÐIR ALLRAR TÖLFRÆÐI")
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
  if (message.content == '!leaderboard' || message.content == '!leaderboard 3s') {
    let url2 = 'https://api.tracker.gg/api/v1/rocket-league/standard/leaderboards?type=playlist&platform=all&board=default&country=is&playlist=13&take=100'

    const { data } = await axios.get(url2,
      {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
        }
      });

    firstplace = data.data.items[0]
    secondplace = data.data.items[1]
    thirdplace = data.data.items[2]
    fourthplace = data.data.items[3]
    fifthplace = data.data.items[4]

    const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Núverandi risar í 3v3')
    .setURL('https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is')
    .setDescription('Þessi listi sýnir topp 5 bestu 3v3 spilara landsins.')
    .addFields(
      { name: '1. sæti :trophy:', value: `${firstplace.owner.metadata.platformUserHandle} --- ${firstplace.value} mmr` },
      { name: '2. sæti :second_place:', value: `${secondplace.owner.metadata.platformUserHandle} --- ${secondplace.value} mmr` },
      { name: '3. sæti :third_place:', value: `${thirdplace.owner.metadata.platformUserHandle} --- ${thirdplace.value} mmr` },
      { name: '4. sæti', value: `${fourthplace.owner.metadata.platformUserHandle} --- ${fourthplace.value} mmr` },
      { name: '5. sæti', value: `${fifthplace.owner.metadata.platformUserHandle} --- ${fifthplace.value} mmr` },
    )

    let text = 'damn, þetta eru góðir spilarar!'
    message.reply({ content: text, embeds: [exampleEmbed] });
  }
  if (message.content == '!leaderboard 1s') {
    let url2 = 'https://api.tracker.gg/api/v1/rocket-league/standard/leaderboards?type=playlist&platform=all&board=default&country=is&playlist=10&take=100'
    
    const { data } = await axios.get(url2,
      {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
        }
      });

    firstplace = data.data.items[0]
    secondplace = data.data.items[1]
    thirdplace = data.data.items[2]
    fourthplace = data.data.items[3]
    fifthplace = data.data.items[4]

    const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Núverandi risar í 1v1')
    .setURL('https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is')
    .setDescription('Þessi listi sýnir topp 5 bestu 1v1 spilara landsins.')
    .addFields(
      { name: '1. sæti :trophy:', value: `${firstplace.owner.metadata.platformUserHandle} --- ${firstplace.value} mmr` },
      { name: '2. sæti :second_place:', value: `${secondplace.owner.metadata.platformUserHandle} --- ${secondplace.value} mmr` },
      { name: '3. sæti :third_place:', value: `${thirdplace.owner.metadata.platformUserHandle} --- ${thirdplace.value} mmr` },
      { name: '4. sæti', value: `${fourthplace.owner.metadata.platformUserHandle} --- ${fourthplace.value} mmr` },
      { name: '5. sæti', value: `${fifthplace.owner.metadata.platformUserHandle} --- ${fifthplace.value} mmr` },
    )

    let text = 'damn, þetta eru góðir spilarar!'
    message.reply({ content: text, embeds: [exampleEmbed] });
  }
  if (message.content == '!leaderboard 2s') {
    let url2 = 'https://api.tracker.gg/api/v1/rocket-league/standard/leaderboards?type=playlist&platform=all&board=default&country=is&playlist=11&take=100'

    const { data } = await axios.get(url2,
      {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
        }
      });

    firstplace = data.data.items[0]
    secondplace = data.data.items[1]
    thirdplace = data.data.items[2]
    fourthplace = data.data.items[3]
    fifthplace = data.data.items[4]

    const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Núverandi risar í 2v2')
    .setURL('https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is')
    .setDescription('Þessi listi sýnir topp 5 bestu 2v2 spilara landsins.')
    .addFields(
      { name: '1. sæti :trophy:', value: `${firstplace.owner.metadata.platformUserHandle} --- ${firstplace.value} mmr` },
      { name: '2. sæti :second_place:', value: `${secondplace.owner.metadata.platformUserHandle} --- ${secondplace.value} mmr` },
      { name: '3. sæti :third_place:', value: `${thirdplace.owner.metadata.platformUserHandle} --- ${thirdplace.value} mmr` },
      { name: '4. sæti', value: `${fourthplace.owner.metadata.platformUserHandle} --- ${fourthplace.value} mmr` },
      { name: '5. sæti', value: `${fifthplace.owner.metadata.platformUserHandle} --- ${fifthplace.value} mmr` },
    )

    let text = 'damn, þetta eru góðir spilarar!'
    message.reply({ content: text, embeds: [exampleEmbed] });
  }
  if (message.content == '!hjálp') {
    const exampleEmbed = new MessageEmbed()
      .setColor('#34e8eb')
      .addField('!stormur', 'Prófaðu bara ef þú þorir.' || '.', true)
      .addField('!kartoflan', 'Prófaðu bara ef þú þorir.' || '.', true)
      .addField('!staðan', 'Býr til mynd út frá núverandi stöðu Turf deildarinnar á Toornament.', true)
      .addField('!leaderboard', 'Sýnir hlekk að 3v3 ranked lista yfir íslandi.', true)
      .addField('!leaderboard 2s', 'Sýnir hlekk að 2v2 ranked lista yfir íslandi.', true)
      .addField('!leaderboard 1s', 'Sýnir hlekk að 1v1 ranked lista yfir íslandi.', true)
    let text = 'commands'
    message.reply({ content: text, embeds: [exampleEmbed] });
  }
  if (message.content == "!staðan" || message.content == "!sta[an" || message.content == "!stadan") {

    try {
      console.log('fetching data...')
      const { data } = await axios.get('https://play.toornament.com/en_GB/tournaments/4866403712109051904/stages/4886808537895821312/groups/4886808538936008721/');
      // Load HTML we fetched in the previous line
      console.log('data fetched.')

      console.log('loading to cheerio...')
      const $ = cheerio.load(data);
      console.log('loaded to cheerio')

      const overallStandings = $('.ranking-item');

      console.log('collection data to array...')
      let toornamentStandingsArray = []

      overallStandings.each((i, el) => {
        // console.log($(el).children)
        let rank = parseInt($(el).children('div:nth-child(1)').text().trim(), 10)
        let logo = $(el).children('div:nth-child(2)').text().trim()
        let name = $(el).children('div:nth-child(3)').text().trim()
        let played = parseInt($(el).children('div:nth-child(4)').text().trim(), 10)
        let won = parseInt($(el).children('div:nth-child(5)').text().trim(), 10)
        let draw = parseInt($(el).children('div:nth-child(6)').text().trim(), 10)
        let lost = parseInt($(el).children('div:nth-child(7)').text().trim(), 10)
        let forfeit = parseInt($(el).children('div:nth-child(8)').text().trim(), 10)
        let gameswon = parseInt($(el).children('div:nth-child(9)').text().trim(), 10)
        let gameslost = parseInt($(el).children('div:nth-child(10)').text().trim(), 10)
        let plusminus = parseInt($(el).children('div:nth-child(11)').text().trim(), 10)
        let points = parseInt($(el).children('div:nth-child(12)').text().trim(), 10)
        toornamentStandingsArray.push({ name, played, won, lost, gameswon, gameslost, points })
      });
      console.log('data collected to array')

      console.log('adding images to data in array')
      for (i = 0; i < toornamentStandingsArray.length; i++) {
        if (toornamentStandingsArray[i].name === 'LAVA esports')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/5TY3FL5/Lava-logo-transparent.png'
        else if (toornamentStandingsArray[i].name === 'KR')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/DKQdDGM/KR-png.png'
        else if (toornamentStandingsArray[i].name === 'ÞÓR Akureyri')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png'
        else if (toornamentStandingsArray[i].name === 'RAFÍK')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/1mhQ1fs/RAFIK-logo-resized.png'
        else if (toornamentStandingsArray[i].name === 'Midnight Bulls')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/f4Nz5Hf/MB-resized.png'
        else if (toornamentStandingsArray[i].name === 'Somnio')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/KbcVZ5s/Somnio-logo-new-resized.png'
        else if (toornamentStandingsArray[i].name === 'Pandabois')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/m9LDJbQ/Pandabois-logo-resized.png'
        else if (toornamentStandingsArray[i].name === 'oCtai esports')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/DD6MgYD/o-Ctai-esports.png'
      }
      console.log('images added to data.')
      console.log('creating html...')
      let _htmlTemplate = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
        <style>
          body {
            width: 1920px;
            height:980px;
          }
  
          .background {
            background-image: url(https://i.ibb.co/Q6y5BX8/Current-Standings.png);
            background-repeat: no-repeat;
            height: 100vh;
      
            font-family: "MontBold";
            font-family: 'Montserrat', sans-serif;
            font-size: 39px;
            color: white;
            padding-top: 205px;
          }
      
          .StandingsRow {
            display: flex;
            justify-content: flex-start;
            padding-bottom: 10px;
            padding-left: 165px;
            height: 76px;
          }
      
          .StandingsRow p {
            padding-top: 8px;
          }
      
          .pname {
            width: 308px;
            font-size: 37px;
      
          }
      
          .pplayed {
            width: 197px;
            text-align: center;
          }
      
          .pwon {
            width: 197px;
            text-align: center;
          }
      
          .plost {
            width: 196px;
            text-align: center;
          }
      
          .pgameswon {
            width: 196px;
            text-align: center;
          }
      
          .pgameslost {
            width: 196px;
            text-align: center;
          }
      
          .ppoints {
            width: 196px;
            text-align: center;
            font-family: "MontBlack";
            font-family: 'Montserrat', sans-serif;
          }
      
          .Logo {
            height: 70px;
            width: 70px;
            margin-right: 75px;
            margin-top: 33px;
          }
        </style>
      </head>
      <body>
        <div class="background">
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[0].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[0].name}</p>
            <p class="pplayed">${toornamentStandingsArray[0].played}</p>
            <p class="pwon">${toornamentStandingsArray[0].won}</p>
            <p class="plost">${toornamentStandingsArray[0].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[0].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[0].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[0].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[1].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[1].name}</p>
            <p class="pplayed">${toornamentStandingsArray[1].played}</p>
            <p class="pwon">${toornamentStandingsArray[1].won}</p>
            <p class="plost">${toornamentStandingsArray[1].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[1].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[1].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[1].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[2].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[2].name}</p>
            <p class="pplayed">${toornamentStandingsArray[2].played}</p>
            <p class="pwon">${toornamentStandingsArray[2].won}</p>
            <p class="plost">${toornamentStandingsArray[2].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[2].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[2].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[2].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[3].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[3].name}</p>
            <p class="pplayed">${toornamentStandingsArray[3].played}</p>
            <p class="pwon">${toornamentStandingsArray[3].won}</p>
            <p class="plost">${toornamentStandingsArray[3].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[3].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[3].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[3].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[4].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[4].name}</p>
            <p class="pplayed">${toornamentStandingsArray[4].played}</p>
            <p class="pwon">${toornamentStandingsArray[4].won}</p>
            <p class="plost">${toornamentStandingsArray[4].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[4].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[4].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[4].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[5].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[5].name}</p>
            <p class="pplayed">${toornamentStandingsArray[5].played}</p>
            <p class="pwon">${toornamentStandingsArray[5].won}</p>
            <p class="plost">${toornamentStandingsArray[5].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[5].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[5].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[5].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[6].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[6].name}</p>
            <p class="pplayed">${toornamentStandingsArray[6].played}</p>
            <p class="pwon">${toornamentStandingsArray[6].won}</p>
            <p class="plost">${toornamentStandingsArray[6].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[6].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[6].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[6].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[7].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[7].name}</p>
            <p class="pplayed">${toornamentStandingsArray[7].played}</p>
            <p class="pwon">${toornamentStandingsArray[7].won}</p>
            <p class="plost">${toornamentStandingsArray[7].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[7].gameswon}</p>
            <p class="pgameslost">${toornamentStandingsArray[7].gameslost}</p>
            <p class="ppoints">${toornamentStandingsArray[7].points}</p>
          </div>
        </div>
      </body>
      
      </html>`;

      const puppeteer = { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--headless', '--no-zygote', '--disable-gpu'], headless: true, ignoreHTTPSErrors: true };



      console.log('html created');
      console.log('creating image...');
      const images = await nodeHtmlToImage({
        html: _htmlTemplate,
        quality: 100,
        type: 'jpeg',
        puppeteerArgs: puppeteer,
        encoding: 'buffer',
      })
      console.log('image created');
      console.log('creating message...');

      message.channel.send({ files: [{ attachment: images }] })
      console.log('message sent');
    }
    catch (error) {
      console.log(error)
    }
  }
});

client.on('ready', async () => { //When the bot is ready, we do. the following things:
  client.user.setStatus('online'); //Telling discord we are online.
  client.user.setActivity("!hjálp fyrir commands."); //Setting our dicord "playing" status to a defined text
  console.log(`Logged in as ${client.user.tag}`); //Sending a message into the console saying that we are logging in as (usertag). Can be usefull when you have multiple bots running on the same machine
  console.log('Bot is connected...');


  try {
    streamerChecker();

  } catch (error) {
    console.log(error);
  }
});

const streamerChecker = async () => {

  setInterval(async () => {

    const header = {
      'Client-ID': '3zzmx0l2ph50anf78iefr6su9d8byj8',
      'Accept': 'application/vnd.twitchtv.v5+json'
    };

    console.log(streamers)

    for (i = 0; i < streamers.length; i++) {
      currentStreamerIndex = i
      let streamer = streamers[i].streamer;
      console.log(`checking if streamer ${streamer} is online`)
      let isOnline = streamers[i].isOnline;
      let lastOnline = streamers[i].lastOnline;

      if (isOnline) {
        // Store the URL to request users...
        const usersURL = 'https://api.twitch.tv/kraken/users?login=' + streamer
        // ... and make the request
        let { data } = await axios.get(usersURL, { headers: header });
        const { users } = data;
        if (users.length > 1) {
          console.log('There are more than one user by the name "' + streamer + '"');
          continue;
        }
        if (users.length == 0) {
          console.log(`${streamer} has changed there twitchname `);
          continue;
        }
        const id = users[0]._id;
        const streamsURL = 'https://api.twitch.tv/kraken/streams/' + id;
        const { data: data2 } = await axios.get(streamsURL, { headers: header });
        // ... and make the final request
        stream = data2.stream;

        if (!stream) {
          console.log(`${streamers[currentStreamerIndex].streamer} stopped streaming`)
          streamers[i].isOnline = false;
          fs.writeFile('streamers.json', JSON.stringify(streamers), (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('current standings updated');
          });
        }
      }
      else {

        // Store the URL to request users...
        const usersURL = 'https://api.twitch.tv/kraken/users?login=' + streamer
        // ... and make the request
        let { data } = await axios.get(usersURL, { headers: header });
        const { users } = data;
        if (users.length > 1) {
          console.log('There are more than one user by the name "' + streamer + '"');
          continue;
        }
        if (users.length == 0) {
          console.log(`${streamer} has changed there twitchname `);
          continue;
        }
        const id = users[0]._id;
        const streamsURL = 'https://api.twitch.tv/kraken/streams/' + id;
        const { data: data2 } = await axios.get(streamsURL, { headers: header });
        // ... and make the final request
        stream = data2.stream;
        // Get all possible flags from the program...
        // Attempt to get stream information from the response
        // Get all possible flags from the program...
        console.log(stream)

        const channelID = '738015390042554489';
        const channel = await client.channels.fetch(channelID);

        if (!stream) {
          // streamer is still offline
          console.log(`${streamers[i].streamer} is not streaming`)
        }
        else if (stream.game !== 'Rocket League' && stream.game !== 'Just Chatting') {
          console.log(stream.game)
          console.log(`${stream.channel.display_name} is not streaming Rocket League or chatting`)
        }
        else {
          // streamer is online
          let streamer = stream.channel.display_name
          let url = stream.channel.url
          let game = stream.game
          let viewers = stream.viewers
          let createdAtnew = Date(stream.created_at)
          let matureStatus = stream.channel.mature
          let status = stream.channel.status
          let logo = stream.channel.logo
          let preview = stream.preview
          let partneredStatus = stream.channel.partner
          let followers = stream.channel.followers
          console.log(`game: ${game}, viewers: ${viewers}, createdAtnew: ${createdAtnew}, matureStatus: ${matureStatus}`)
          console.log(`status: ${status}, partneredStatus: ${partneredStatus}, followers: ${followers}`)

          streamers[currentStreamerIndex].isOnline = true

          fs.writeFile('streamers.json', JSON.stringify(streamers), (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('current standings updated');
          });

          const exampleEmbed = new MessageEmbed()
            .setColor('#34e8eb')
            .setTitle(streamer || '.')
            .setURL(url || '.')
            .setAuthor(streamer || '.', logo || '.')
            .setDescription(status || '.')
            .setThumbnail(logo || '.')
            .addField('Game', game || '.', true)
            .addField('followers', `${followers}` || '.', true)
            .addField('viewers', `${viewers}` || '.', true)
            .setImage(preview.medium || '.');
          let text = '**' + streamer + '**' + ` er með útsendingu í leiknum ${game}. Fylgist með hér: ${url}`
          if (game === 'Just Chatting') {
            text = '**' + streamer + '**' + ` er með útsendingu og er bara að spjalla. Fylgist með hér: ${url}`
          }
          channel.send({ content: text, embeds: [exampleEmbed] });
        }
      }
    }
  }, 60000);
}

//Bot Logins
client.login(CONFIG.token); //Logging in: will use the token contained into the config.json to connect to the discord a