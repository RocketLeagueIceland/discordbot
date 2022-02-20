const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// úrvals deild
lava = 'LAVA Esports';
thor = 'Þór Akureyri';
rafik = 'Rafík';
kr = 'KR';
midnightBulls = 'Midnight Bulls';
somnio = 'Somnio';
t354 = '354 eSports';
breakingSad = 'Breaking Sad';

// fyrsta deild
pandaBois = 'Pandabois';
hvb = 'High-Voltage Bangers';
rusty = 'Rusty';
ron = 'RON';
thorWhite = 'Þór White';
infinity = '1nfinity Esports';
blulagoons = 'blulaGOONS';
pushinP = 'Pushin P';
biddadeins = 'BÍDDAÐEINS';
clb = 'Certified Lover Boys';

// önnur deild TBA

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roster')
    .setDescription('Til að sjá leikmannahóp liða í deildum RLÍS')
    .addStringOption(option =>
      option.setName('lið')
        .setDescription('Liðið sem skoða skal')
        .setRequired(true)
        .addChoice(lava, lava)
        .addChoice(thor, thor)
        .addChoice(rafik, rafik)
        .addChoice(kr, kr)
        .addChoice(midnightBulls, midnightBulls)
        .addChoice(somnio, somnio)
        .addChoice(t354, t354)
        .addChoice(breakingSad, breakingSad)
        .addChoice(pandaBois, pandaBois)
        .addChoice(hvb, hvb)
        .addChoice(rusty, rusty)
        .addChoice(ron, ron)
        .addChoice(thorWhite, thorWhite)
        .addChoice(infinity, infinity)
        .addChoice(blulagoons, blulagoons)
        .addChoice(pushinP, pushinP)
        .addChoice(biddadeins, biddadeins)
        .addChoice(clb, clb)
    ),
  async execute(interaction) {
    let teamName = interaction.options.getString('lið');


    let url = 'https://rocketleague.is'
    let fields = []
    let description = `Hér eru spilararnir í ${teamName}.`
    let image = 'https://ibb.co/k9y5KGZ'

    switch (teamName) {

      case lava:
        fields = [
          { name: 'EmilVald', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/EmilVald/overview` },
          { name: 'Vaddimah', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/vaddimah/overview` },
          { name: 'Paxole', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/PaxoleOne/overview` },
          { name: 'BNZ', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/brynjarorn97/overview` },
        ];
        url = 'https://lavaesports.com/';
        image = 'https://i.ibb.co/5TY3FL5/Lava-logo-transparent.png';
        break;

      case thor:
        fields = [
          { name: 'Kartofla', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/Kartofla/overview` },
          { name: 'Hemmigumm', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/hemmigumm/overview` },
          { name: 'Danni Juice', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172429331/overview` },
          { name: 'Smívar', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/smivar/overview` },
        ];
        url = 'https://thorsport.is/';
        image = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png';
        break;

      case rafik:
        fields = [
          { name: 'Smushball', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/smushballs/overview` },
          { name: 'Atli', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/aunnsteinsson/overview` },
          { name: 'Óli', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/olitr/overview` },
          { name: 'Kraken', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198126269198/overview` },
        ];
        url = 'https://rafithrottir.keflavik.is/';
        image = 'https://i.ibb.co/1mhQ1fs/RAFIK-logo-resized.png';
        break;

      case kr:
        fields = [
          { name: 'steb', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/stebbano/overview` },
          { name: 'ousic', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/ousic/overview` },
          { name: 'jappi', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198004730453/overview` },
          { name: 'JM', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/JMtheOG/overview` },
        ];
        url = 'https://www.facebook.com/KResports2019/';
        image = 'https://i.ibb.co/DKQdDGM/KR-png.png';
        break;

      case midnightBulls:
        fields = [
          { name: 'Bobbi', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/CMBobbi/overview` },
          { name: 'Haxfaðir', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198284400165/overview` },
          { name: 'Snazz', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/snassi2607/overview` },
          { name: 'Klobbi', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172398909/overview` },
        ];
        url = 'https://www.mbl.is/sport/esport/2021/09/13/nylidar_midnight_bulls_komu_a_ovart/';
        image = 'https://i.ibb.co/f4Nz5Hf/MB-resized.png';
        break;

      case somnio:
        fields = [
          { name: 'Bafga', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198164429718/overview` },
          { name: 'Stormur', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/Pungurinn/overview` },
          { name: 'Snibb Snabb', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198052958613/overview` },
          { name: 'Dabbi789', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/76561198024045703/overview` },
        ];
        url = 'https://www.facebook.com/SomnioGaming/';
        image = 'https://i.ibb.co/KbcVZ5s/Somnio-logo-new-resized.png';
        break;

      case t354:
        fields = [
          { name: 'Cereal', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/DontEatMyCereal/overview` },
          { name: 'flurry97', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/juicebrik/overview` },
          { name: 'Bjarnifraendi', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/bjarnifraendi/overview` },
          { name: 'Allifret', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/allifret/overview` },
        ];
        url = 'https://354gaming.is/';
        image = 'https://i.ibb.co/L1HvpJ5/354v2-250px.png';
        break;

      case breakingSad:
        fields = [
          { name: 'lothiN\'', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/Lothin/overview` },
          { name: 'sizophrenic', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/sizophrenic/overview` },
          { name: 'Handygoon', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/Handygoon/overview` },
          { name: 'Vano', value: `https://rocketleague.tracker.network/rocket-league/profile/steam/VanoRL/overview` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://ibb.co/Mc4nD0g';

      case pandaBois:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`;
        image = 'https://i.ibb.co/m9LDJbQ/Pandabois-logo-resized.png';
        break;
      case hvb:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case rusty:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case ron:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case thorWhite:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case infinity:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case blulagoons:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case pushinP:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case biddadeins:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      case clb:
        // your code here
        description = `Það á eftir að skrá spilarana í ${teamName}.`
        break;
      default:
      // code block
    }


    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${teamName}`)
      .setURL(url)
      .setDescription(description)
      .addFields(...fields)
      .setThumbnail(image)

    let text = `${teamName}!`

    await interaction.reply({ content: text, embeds: [exampleEmbed] });
  },
};