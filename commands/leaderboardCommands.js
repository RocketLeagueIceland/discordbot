const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require("axios");

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
        playlistNumber =  ;
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

    const { data } = await axios.get(url,
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
      .setColor('#1c2e4a')
      .setTitle(`Núverandi risar í ${playlistName}`)
      .setURL('https://rocketleague.tracker.network/rocket-league/leaderboards/playlist/all/default?page=1&playlist=13&continent=eu&country=is')
      .setDescription(`Þessi listi sýnir topp 5 bestu ${playlistName} spilara landsins.`)
      .addFields(
        { name: '1. sæti :trophy:', value: `${firstplace.owner.metadata.platformUserHandle} --- ${firstplace.value} mmr` },
        { name: '2. sæti :second_place:', value: `${secondplace.owner.metadata.platformUserHandle} --- ${secondplace.value} mmr` },
        { name: '3. sæti :third_place:', value: `${thirdplace.owner.metadata.platformUserHandle} --- ${thirdplace.value} mmr` },
        { name: '4. sæti', value: `${fourthplace.owner.metadata.platformUserHandle} --- ${fourthplace.value} mmr` },
        { name: '5. sæti', value: `${fifthplace.owner.metadata.platformUserHandle} --- ${fifthplace.value} mmr` },
      )

    await interaction.editReply({ content: null, embeds: [exampleEmbed] });
  },
};