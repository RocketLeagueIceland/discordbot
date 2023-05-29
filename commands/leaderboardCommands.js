const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require("axios");
const puppeteer = require('puppeteer');

// úrvals deild
commandName = 'leaderboard';
optionName = 'playlist';
one = '1s';
two = '2s';
three = '3s';
rumble = 'rumble';
hoops = 'hoops';
dropshot = 'dropshot';
snowday = 'snowday';

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Til að sjá efstu 5 spilara á Íslandi í 1s, 2s 3s, eða öðrum playlista')
    .addStringOption(option =>
      option.setName(optionName)
        .setDescription('veldu playlista')
        .setRequired(true)
        .addChoice(one, one)
        .addChoice(two, two)
        .addChoice(three, three)
        .addChoice(rumble, rumble)
        .addChoice(hoops, hoops)
        .addChoice(dropshot, dropshot)
        .addChoice(snowday, snowday)
    ),
  async execute(interaction) {
    await interaction.deferReply();
    let option = interaction.options.getString(optionName);
    let playlistNumber = 13;
    let playlistName = '3v3';

    switch (option) {

      case one:
        playlistNumber = 10;
        playlistName = '1v1';
        break;

      case two:
        playlistNumber = 11;
        playlistName = '2v2';
        break;

      case three:
        playlistNumber = 13;
        playlistName = '3v3';
        break;

      case rumble:
        playlistNumber = 28;
        playlistName = 'rumble';
        break;

      case hoops:
        playlistNumber = 27;
        playlistName = 'hoops';
        break;

      case dropshot:
        playlistNumber = 29;
        playlistName = 'dropshot';
        break;

      case snowday:
        playlistNumber = 30;
        playlistName = 'snowday';
        break;

      default:
        console.log('we should never reach this default actually.')
    }

    let url = `https://api.tracker.gg/api/v1/rocket-league/standard/leaderboards?type=playlist&platform=all&board=default&country=is&playlist=${playlistNumber}&take=100`


    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Open a new page
    const page = await browser.newPage();

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);

    // Simulate human interaction
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

    // Go to the target URL
    await page.goto(`https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=${playlistNumber}&country=is`);

    // Wait for a specific element to load on the page
    await page.waitForSelector('span.trn-ign__username', { timeout: 20000 }); // Replace 'selector' with the CSS selector of the element you're waiting for
    await page.waitForSelector('td.stat.highlight div', { timeout: 20000 }); // Replace 'selector' with the CSS selector of the element you're waiting for

    // Add a delay (e.g., 2 seconds) to wait for additional data or components to load
    await page.waitForTimeout(2000);

    // Extract data from the page
    const data = await page.evaluate(() => {

      const selectorun = 'span.trn-ign__username'; // Replace with the selector you want to match
      const allMatchingElementsun = document.querySelectorAll(selectorun);
      const firstFiveMatchingElementsun = Array.prototype.slice.call(allMatchingElementsun, 0, 5);

      const selectormmr = 'td.stat.highlight div'; // Replace with the selector you want to match
      const allMatchingElements = document.querySelectorAll(selectormmr);
      const firstFiveMatchingElements = Array.prototype.slice.call(allMatchingElements, 0, 5);

      return [
        {player: firstFiveMatchingElementsun[0].innerText, mmr: firstFiveMatchingElements[0].innerText},
        {player: firstFiveMatchingElementsun[1].innerText, mmr: firstFiveMatchingElements[1].innerText},
        {player: firstFiveMatchingElementsun[2].innerText, mmr: firstFiveMatchingElements[2].innerText},
        {player: firstFiveMatchingElementsun[3].innerText, mmr: firstFiveMatchingElements[3].innerText},
        {player: firstFiveMatchingElementsun[4].innerText, mmr: firstFiveMatchingElements[4].innerText},
      ]
    });

    // Log the extracted data
    console.log(data);

    // Close the browser
    await browser.close();

    firstplace = data[0]
    secondplace = data[1]
    thirdplace = data[2]
    fourthplace = data[3]
    fifthplace = data[4]


    const exampleEmbed = new MessageEmbed()
      .setColor('#1c2e4a')
      .setTitle(`Núverandi risar í ${playlistName}`)
      .setURL('https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is')
      .setDescription(`Þessi listi sýnir topp 5 bestu ${playlistName} spilara landsins.`)
      .addFields(
        { name: '1. sæti :trophy:', value: `${firstplace.player} --- ${firstplace.mmr} mmr` },
        { name: '2. sæti :second_place:', value: `${secondplace.player} --- ${secondplace.mmr} mmr` },
        { name: '3. sæti :third_place:', value: `${thirdplace.player} --- ${thirdplace.mmr} mmr` },
        { name: '4. sæti', value: `${fourthplace.player} --- ${fourthplace.mmr} mmr` },
        { name: '5. sæti', value: `${fifthplace.player} --- ${fifthplace.mmr} mmr` },
      )

    await interaction.editReply({ content: null, embeds: [exampleEmbed] });
  },
};