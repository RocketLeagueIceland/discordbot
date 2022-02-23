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
infinity = '1nfinity';
blulagoons = 'blulaGOONS';
pushinP = 'Pushin P';
biddadeins = 'BÍDDAÐEINS';
clb = 'Certified Lover Boys';

// önnur deild TBA
t354Academy = '354 academy';
rustyAcademy = 'Rusty Academy';

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
        .addChoice(t354Academy, t354Academy)
        .addChoice(rustyAcademy, rustyAcademy)
    ),
  async execute(interaction) {
    let teamName = interaction.options.getString('lið');


    let url = 'https://rocketleague.is'
    let fields = []
    let description = `Hér eru spilararnir í ${teamName}.`
    let image = 'https://i.ibb.co/vQBV1c9/RLIS-Toornament-logo.png'

    switch (teamName) {

      case lava:
        fields = [
          { name: 'EmilVald', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/EmilVald/overview)` },
          { name: 'Vaddimah', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/vaddimah/overview)` },
          { name: 'Paxole', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/PaxoleOne/overview)` },
          { name: 'BNZ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/brynjarorn97/overview)` },
        ];
        url = 'https://lavaesports.com/';
        image = 'https://i.ibb.co/5TY3FL5/Lava-logo-transparent.png';
        break;

      case thor:
        fields = [
          { name: 'Kartofla', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Kartofla/overview)` },
          { name: 'Hemmigumm', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/hemmigumm/overview)` },
          { name: 'Danni Juice', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172429331/overview)` },
          { name: 'Smívar', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/smivar/overview)` },
        ];
        url = 'https://thorsport.is/';
        image = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png';
        break;

      case rafik:
        fields = [
          { name: 'Smushball', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/smushballs/overview)` },
          { name: 'Atli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/aunnsteinsson/overview)` },
          { name: 'Óli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/olitr/overview)` },
          { name: 'Kraken', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198126269198/overview)` },
        ];
        url = 'https://rafithrottir.keflavik.is/';
        image = 'https://i.ibb.co/1mhQ1fs/RAFIK-logo-resized.png';
        break;

      case kr:
        fields = [
          { name: 'steb', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/stebbano/overview)` },
          { name: 'ousic', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/ousic/overview)` },
          { name: 'jappi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198004730453/overview)` },
          { name: 'JM', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/JMtheOG/overview)` },
        ];
        url = 'https://www.facebook.com/KResports2019/';
        image = 'https://i.ibb.co/DKQdDGM/KR-png.png';
        break;

      case midnightBulls:
        fields = [
          { name: 'Bobbi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/CMBobbi/overview)` },
          { name: 'Haxfaðir', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198284400165/overview)` },
          { name: 'Snazz', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/snassi2607/overview)` },
          { name: 'Klobbi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172398909/overview)` },
        ];
        url = 'https://www.mbl.is/sport/esport/2021/09/13/nylidar_midnight_bulls_komu_a_ovart/';
        image = 'https://i.ibb.co/f4Nz5Hf/MB-resized.png';
        break;

      case somnio:
        fields = [
          { name: 'Bafga', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198164429718/overview)` },
          { name: 'Stormur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Pungurinn/overview)` },
          { name: 'Snibb Snabb', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198052958613/overview)` },
          { name: 'Dabbi789', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198024045703/overview)` },
        ];
        url = 'https://www.facebook.com/SomnioGaming/';
        image = 'https://i.ibb.co/KbcVZ5s/Somnio-logo-new-resized.png';
        break;

      case t354:
        fields = [
          { name: 'Cereal', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/DontEatMyCereal/overview)` },
          { name: 'flurry97', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/juicebrik/overview)` },
          { name: 'Bjarnifraendi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/bjarnifraendi/overview)` },
          { name: 'Allifret', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/allifret/overview)` },
        ];
        url = 'https://354gaming.is/';
        image = 'https://i.ibb.co/L1HvpJ5/354v2-250px.png';
        break;

      case breakingSad:
        fields = [
          { name: 'lothiN\'', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Lothin/overview)` },
          { name: 'sizophrenic', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/sizophrenic/overview)` },
          { name: 'Handygoon', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Handygoon/overview)` },
          { name: 'Vano', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/VanoRL/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/D9y4D21/bslogo512.png';
        break;
        
      case pandaBois:
        fields = [
          { name: 'Stuttbuxur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/gisliorn/overview)` },
          { name: 'mediuMReyr', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/mediumvape/overview)` },
          { name: 'Slapi36', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/slapi36/overview)` },
          { name: 'Ostakaka', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198044314675/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/m9LDJbQ/Pandabois-logo-resized.png';
        break;

      case hvb:
        fields = [
          { name: 'Tommi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/t0mah4wk/overview)` },
          { name: 'solvigunn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198072113176/overview)` },
          { name: 'davidkuld', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/Davidkuld/overview)` },
          { name: 'SirMrE', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198002261949/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/LgL0zXw/HVB2.png';
        break;

      case rusty:
        fields = [
          { name: 'Alfarinn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/andriasgeir/overview)` },
          { name: 'Lxi.', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/lxi./overview)` },
          { name: 'vJaden', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198805970350/overview)` },
          { name: 'ENZane', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/ENZane23/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/cD7F7yL/Rusty.png';
        break;

      case ron:
        fields = [
          { name: 'Gullos10', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Gullos10/overview)` },
          { name: 'Magni^_^', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Magni^_^/overview)` },
          { name: 'Litla_Tikin', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Litla_Tikin/overview)` },
          { name: 'ómó', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/ómó/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/njKVjpf/44b9f8e9-15cf-4b5c-a055-08d8c46e1444-128-128.jpg';
        break;

      case thorWhite:
        fields = [
          { name: 'Wombo Combo', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/wombocomboturbo/overview)` },
          { name: 'Vikt_ormar', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198988527025/overview)` },
          { name: 'ebbibolla', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/ebbibolla/overview)` },
          { name: 'A1_vexinate', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198860118038/overview)` },
        ];
        url = 'https://thorsport.is/';
        image = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png';
        break;

      case infinity:
        fields = [
          { name: 'SaltSkeggur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/SaltSkeggur/overview)` },
          { name: 'Presley', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Presley93/overview)` },
          { name: 'Toni Chris', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/toni%20chris/overview)` },
          { name: 'PenguinGod ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/PenguinGod1310/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/r7SW5Xc/infinity.png';
        break;

      case blulagoons:
        fields = [
          { name: 'pepsicola.coca', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/pepsicola.coca/overview)` },
          { name: 'Dr Bamboo', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/DrBamboo/overview)` },
          { name: 'Eagle', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/TheEaglesStream/overview)` },
          { name: 'joibje ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/joibje/overview)` },
        ];
        url = 'https://rocketleague.is';
        // image = 'https://ibb.co/Bzx1TYr';
        break;

      case pushinP:
        fields = [
          { name: 'Lið ekki skráð', value: `Upplýsingar koma um leið og lið hefur verið skráð í deildina` },
        ];
        url = 'https://rocketleague.is';
        // image = 'https://ibb.co/Bzx1TYr';
        break;

      case biddadeins:
        fields = [
          { name: 'Ageir9', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Ageir9/overview)` },
          { name: 'Fanarito', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Fanarito/overview)` },
          { name: 'Dairy Free', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/iLikeCaves/overview)` },
          { name: 'Sofasett ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Sofasett/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/zRpGKw0/B-dda-eins.png';
        break;

      case clb:
        fields = [
          { name: 'Lið ekki skráð', value: `Upplýsingar koma um leið og lið hefur verið skráð í deildina` },
        ];
        url = 'https://rocketleague.is';
        // image = 'https://ibb.co/Bzx1TYr';
        break;

      case t354Academy:
        fields = [
          { name: 'Éli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Daninn/overview)` },
          { name: 'Uglan', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Nj%C3%B3sna%20Ugla/overview)` },
          { name: 'Nökkvi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/n%C3%B6kkvi./overview)` },
          { name: 'JcB_RL', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/JcB_RL/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/0Z4tgkK/354-academy-250.png';
        break;

      case rustyAcademy:
        fields = [
          { name: 'KrissiAgust', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Krissi99/overview)` },
          { name: 'Ausa', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Ausa./overview)` },
          { name: 'Ingzinn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198024583791/overview)` },
          { name: 'Krókur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/KrókurRl/overview)` },
        ];
        url = 'https://rocketleague.is';
        image = 'https://i.ibb.co/cD7F7yL/Rusty.png';
        break;

      default:
      // code block
    }


    const exampleEmbed = new MessageEmbed()
      .setColor('#1c2e4a')
      .setTitle(`${teamName}`)
      .setURL(url)
      //.setDescription(description)
      .addFields(...fields)
      .setThumbnail(image)

    await interaction.reply({ content: null, embeds: [exampleEmbed] });
  },
};