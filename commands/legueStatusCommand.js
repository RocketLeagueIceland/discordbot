const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require("axios");
const nodeHtmlToImage = require('node-html-to-image')
const cheerio = require("cheerio");

commandName = 'staðan';

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Til að sjá núverandi stöðu á Arena deildinni'),
  async execute(interaction) {
    await interaction.deferReply();

    try {
      console.log('fetching data...')
      const { data } = await axios.get('https://play.toornament.com/en_GB/tournaments/6005815484662964224/stages/6019944245391966208/groups/6044355496923930624/');
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
        toornamentStandingsArray.push({ name, played, won, lost, plusminus, points })
      });
      console.log('data collected to array')

      console.log('adding images to data in array')
      for (i = 0; i < toornamentStandingsArray.length; i++) {
        if (toornamentStandingsArray[i].name === 'LAVA esports')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/5TY3FL5/Lava-logo-transparent.png'
        else if (toornamentStandingsArray[i].name === 'KR')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/DKQdDGM/KR-png.png'
        else if (toornamentStandingsArray[i].name === 'Þór Akureyri')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png'
        else if (toornamentStandingsArray[i].name === 'Rafík')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/1mhQ1fs/RAFIK-logo-resized.png'
        else if (toornamentStandingsArray[i].name === 'Midnight Bulls')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/f4Nz5Hf/MB-resized.png'
        else if (toornamentStandingsArray[i].name === 'Somnio')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/KbcVZ5s/Somnio-logo-new-resized.png'
        else if (toornamentStandingsArray[i].name === 'Breaking Sad')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/dbPGgSB/Breaking-Sad.png'
        else if (toornamentStandingsArray[i].name === '354 eSports')
          toornamentStandingsArray[i].logo = 'https://i.ibb.co/c3hGKpH/354e-Sports.png'
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
          
          @import url('http://fonts.cdnfonts.com/css/lemonmilk');

          body {
            width: 1920px;
            height: 1080px;
          }
      
          .background {
            background-image: url(https://i.ibb.co/PmZQzHw/Current-Standings.png);
            background-repeat: no-repeat;
            height: 100vh;
      
            font-family: "Lemon/Milk", arial;
            font-size: 45px;
            color: white;
            padding-top: 320px;
          }
      
          .StandingsRow {
            display: flex;
            justify-content: flex-start;
            padding-bottom: 3px;
            padding-left: 233px;
            height: 85px;
          }
      
          .StandingsRow p {
            margin-top: -5px;
          }
      
          .pname {
            width: 462px;
          }
      
          .pplayed {
            width: 100px;
            padding-right: 10px;
            text-align: center;
          }
      
          .pwon {
            width: 100px;
            text-align: center;
          }
      
          .plost {
            width: 100px;
            text-align: center;
          }
      
          .pgameswon {
            width: 100px;
            text-align: center;
          }
      
          .pgameslost {
            width: 100px;
            text-align: center;
          }
      
          .ppoints {
            width: 100px;
            text-align: center;
            font-weight: 500;
          }
      
      
          .Logo {
            height: 65px;
            width: 65px;
            margin-right: 35px;
            margin-top: -4px;
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
            <p class="pgameswon">${toornamentStandingsArray[0].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[0].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[1].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[1].name}</p>
            <p class="pplayed">${toornamentStandingsArray[1].played}</p>
            <p class="pwon">${toornamentStandingsArray[1].won}</p>
            <p class="plost">${toornamentStandingsArray[1].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[1].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[1].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[2].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[2].name}</p>
            <p class="pplayed">${toornamentStandingsArray[2].played}</p>
            <p class="pwon">${toornamentStandingsArray[2].won}</p>
            <p class="plost">${toornamentStandingsArray[2].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[2].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[2].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[3].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[3].name}</p>
            <p class="pplayed">${toornamentStandingsArray[3].played}</p>
            <p class="pwon">${toornamentStandingsArray[3].won}</p>
            <p class="plost">${toornamentStandingsArray[3].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[3].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[3].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[4].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[4].name}</p>
            <p class="pplayed">${toornamentStandingsArray[4].played}</p>
            <p class="pwon">${toornamentStandingsArray[4].won}</p>
            <p class="plost">${toornamentStandingsArray[4].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[4].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[4].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[5].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[5].name}</p>
            <p class="pplayed">${toornamentStandingsArray[5].played}</p>
            <p class="pwon">${toornamentStandingsArray[5].won}</p>
            <p class="plost">${toornamentStandingsArray[5].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[5].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[5].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[6].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[6].name}</p>
            <p class="pplayed">${toornamentStandingsArray[6].played}</p>
            <p class="pwon">${toornamentStandingsArray[6].won}</p>
            <p class="plost">${toornamentStandingsArray[6].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[6].plusminus}</p>
            <p class="ppoints">${toornamentStandingsArray[6].points}</p>
          </div>
          <div class="StandingsRow">
            <img class="Logo" src="${toornamentStandingsArray[7].logo}" alt=''></img>
            <p class="pname">${toornamentStandingsArray[7].name}</p>
            <p class="pplayed">${toornamentStandingsArray[7].played}</p>
            <p class="pwon">${toornamentStandingsArray[7].won}</p>
            <p class="plost">${toornamentStandingsArray[7].lost}</p>
            <p class="pgameswon">${toornamentStandingsArray[7].plusminus}</p>
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

      // message.channel.send({ files: [{ attachment: images }] })
      await interaction.editReply({ content: null, files: [{ attachment: images }] });
      console.log('message sent');
    }
    catch (error) {
      console.log(error)
    }
  },
};