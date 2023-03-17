const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// Úrvals deild
lava = 'LAVA Esports';
breidablik = 'Breiðablik';
thor = 'Þór Akureyri';
t354 = '354 eSports';
breakingSad = 'Breaking Sad';
pushinP = 'Pushin P';
sudurtak = 'Suðurtak';
vikingurO = 'Víkingur Ólafsvík';

// Fyrsta deild
pandaBois = 'Pandabois';
infinity = '1nfinity';
hvb = 'High-Voltage Bangers';
bringBackSvali = 'Bring Back Svali';
skagadrengir = 'Skagadrengir';
t9to5 = '9 til 5';
bondadurgar = 'Bóndadurgar';
omon = 'OMON';
outSpeed = 'OutSpeed Esports'
svorumStrax = 'Svörum Strax';

// Önnur deild TBA


// Players
const emilvald = { name: 'EmilVald', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/EmilVald/overview)` };
const vaddimah = { name: 'Vaddimah', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/vaddimah/overview)` };
const paxole = { name: 'Paxole', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/PaxoleOne/overview)` };
const bnz = { name: 'BNZ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/brynjarorn97/overview)` };
const kartofla = { name: 'Kartofla', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Kartofla/overview)` };
const hemmigumm = { name: 'Hemmigumm', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/hemmigumm/overview)` };
const dannijuice = { name: 'Danni Juice', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172429331/overview)` };
const rafn = { name: 'RAFn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198996617383/overview)` };
const smushball = { name: 'Smushball', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/smushballs/overview)` };
const atli = { name: 'Atli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/aunnsteinsson/overview)` };
const oli = { name: 'Óli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/olitr/overview)` };
const kraken = { name: 'Kraken', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198126269198/overview)` };
const steb = { name: 'steb', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/stebbano/overview)` };
const ousic = { name: 'ousic', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/ousic/overview)` };
const jappi = { name: 'jappi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198004730453/overview)` };
const jm = { name: 'JM', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/JMtheOG/overview)` };
const bobbi = { name: 'Bobbi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/CMBobbi/overview)` };
const haxfadir = { name: 'Haxfaðir', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198284400165/overview)` };
const snazz = { name: 'Snæsi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561199028133353/overview)` };
const klobbi = { name: 'Klobbi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198172398909/overview)` };
const bafga = { name: 'Bafga', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198164429718/overview)` };
const stormur = { name: 'Stormur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Pungurinn/overview)` };
const snibbsnabb = { name: 'Snibb Snabb', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198052958613/overview)` };
const dabbi789 = { name: 'Dabbi789', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198024045703/overview)` };
const cereal = { name: 'Cereal', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/DontEatMyCereal/overview)` };
const flurry = { name: 'flurry97', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/juicebrik/overview)` };
const bjarnifraendi = { name: 'Bjarnifraendi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/bjarnifraendi/overview)` };
const allifret = { name: 'Allifret', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/allifret/overview)` };
const lothin = { name: 'lothiN\'', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Lothin/overview)` };
const sizophrenic = { name: 'sizophrenic', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/sizophrenic/overview)` };
const handygoon = { name: 'Handygoon', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Handygoon/overview)` };
const vano = { name: 'Vano', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/VanoRL/overview)` };
const stuttbuxur = { name: 'Stuttbuxur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/gisliorn/overview)` };
const mediumreyr = { name: 'mediuMReyr', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/mediumvape/overview)` };
const slapi36 = { name: 'Slapi36', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/slapi36/overview)` };
const ostakaka = { name: 'Ostakaka', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198044314675/overview)` };
const tommi = { name: 'Tommi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/t0mah4wk/overview)` };
const solvigunn = { name: 'solvigunn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198072113176/overview)` };
const davidkuld = { name: 'davidkuld', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/Davidkuld/overview)` };
const sirmre = { name: 'SirMrE', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198002261949/overview)` };
const alfarinn = { name: 'Alfarinn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/andriasgeir/overview)` };
const lxi = { name: 'Lxi.', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/lxi./overview)` };
const Bjarni = { name: 'bjarni.', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198805970350/overview)` };
const enzane = { name: 'ENZane', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/ENZane23/overview)` };
const gullos = { name: 'Gullos10', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Gullos10/overview)` };
const magni = { name: 'Magni^_^', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Magni^_^/overview)` };
const litlatikin = { name: 'Litla_Tikin', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Litla_Tikin/overview)` };
const omo = { name: 'ómó', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/ómó/overview)` };
const wombocombo = { name: 'Wombo Combo', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/wombocomboturbo/overview)` };
const viktormar = { name: 'Vikt_ormar', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198988527025/overview)` };
const ebbibolla = { name: 'ebbibolla', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/ebbibolla/overview)` };
const a1 = { name: 'A1_vexinate', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198860118038/overview)` };
const saltskeggur = { name: 'SaltSkeggur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/SaltSkeggur/overview)` };
const presley = { name: 'Presley', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Presley93/overview)` };
const tonichris = { name: 'Toni Chris', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/toni%20chris/overview)` };
const penguin = { name: 'PenguinGod ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/PenguinGod1310/overview)` };
const stofer = { name: 'stofer.', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/stofer./overview)` };
const drbamboo = { name: 'Dr Bamboo', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/DrBamboo/overview)` };
const eagle = { name: 'Eagle', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/TheEaglesStream/overview)` };
const joibje = { name: 'joibje ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/joibje/overview)` };
const roadman = { name: 'Roadmane', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/RoadmanGK3/overview)` };
const aronrafn = { name: 'Aronrafn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Aronrafn/overview)` };
const moonmamba = { name: 'MoonMamba', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/MoonMamba/overview)` };
const krilli = { name: 'Krilli ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/pabbi4/overview)` };
const ageir9 = { name: 'Ageir9', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Ageir9/overview)` };
const fanarito = { name: 'Fanarito', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Fanarito/overview)` };
const dairyfree = { name: 'Dairy Free', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/iLikeCaves/overview)` };
const sofasett = { name: 'Sofasett ', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Sofasett/overview)` };
const ayobabe = { name: 'AYOBABE', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/AYOBABE/overview)` };
const certifiednaldo = { name: 'CertifiedNaldo', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/CertifiedNaldo/overview)` };
const icenogla = { name: 'IceNogla', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/IceNogla./overview)` };
const skorrz00 = { name: 'Skorrz00', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/psn/Skorrz00/overview)` };
const eli = { name: 'Éli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/Daninn/overview)` };
const uglan = { name: 'Uglan', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Nj%C3%B3sna%20Ugla/overview)` };
const djNizzy = { name: 'DJ Nizzy', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/dj%20nizzy/overview)` };
const jcb = { name: 'JcB_RL', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/JcB_RL/overview)` };
const krissiagust = { name: 'KrissiAgust', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Krissi99/overview)` };
const ausa = { name: 'Ausa', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Ausa./overview)` };
const ingzinn = { name: 'Ingzinn', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198024583791/overview)` };
const krokur = { name: 'Krókur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/KrókurRl/overview)` };
const cynical = { name: 'Cynical', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198449530626/overview)` };
const curli = { name: 'Curli', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561197996734709/overview)` };
const gummi = { name: 'Gummi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561197982926481/overview)` };
const hodge = { name: 'Hodge', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/hodge_/overview)` };
const cryypto = { name: 'cryypto', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198354807974/overview)` };
const rooneybangzon = { name: 'RooneyBangzon', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Warmfox15/overview)` };
const justus = { name: 'Justus', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/justusplayer/overview)` };
const simmivalur = { name: 'SimmiValur', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198834358553/overview)` };
const mundi = { name: 'Mundi', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/steam/76561198200985094/overview)` };
const tossis = { name: 'Tossis', value: `[Tracker](https://rocketleague.tracker.network/rocket-league/profile/epic/Tossis/overview)` };

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roster')
    .setDescription('Til að sjá leikmannahóp liða í deildum RLÍS')
    .addStringOption(option =>
      option.setName('lið')
        .setDescription('Liðið sem skoða skal')
        .setRequired(true)
        .addChoice(lava, lava)
        .addChoice(breidablik, breidablik)
        .addChoice(thor, thor)
        .addChoice(breakingSad, breakingSad)
        .addChoice(t354, t354)
        .addChoice(breakingSad, breakingSad)
        .addChoice(pushinP, pushinP)
        .addChoice(sudurtak, sudurtak)
        .addChoice(vikingurO, vikingurO)
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
          vaddimah,
          bnz,
          oli,
          cynical
        ];
        url = 'https://lavaesports.com/';
        image = 'https://i.ibb.co/3zktBL6/LAVA-1x1.png';
        break;

      case thor:
        fields = [
          steb,
          ousic,
          dannijuice,
          cryypto
        ];
        url = 'https://www.thorsport.is/rafithrottir';
        image = 'https://i.ibb.co/0BgDcTy/thor-akureyri-vector-logo.png';
        break;

      case breidablik:
        fields = [
          emilvald,
          paxole,
          smushball,
          krilli
        ];
        url = 'https://breidablik.gg/';
        image = 'https://i.ibb.co/2vQsNcS/breidablik.png';
        break;

      case t354:
        fields = [
          mundi,
          tossis,
          bjarni,
          stormur
        ];
        url = 'https://354esports.is/';
        image = 'https://i.ibb.co/L1HvpJ5/354v2-250px.png';
        break;

      case breakingSad:
        fields = [
          sizophrenic,
          handygoon,
          vano,
          alfarinn
        ];
        url = 'https://rocketleague.is/breaking_sad';
        image = 'https://i.ibb.co/D9y4D21/bslogo512.png';
        break;

      case pushinP:
        fields = [
          roadman,
          klobbi,
          aronrafn,
          hodge
        ];
        url = 'https://rocketleague.is/pushin_p';
        image = 'https://i.ibb.co/0sJ8HYB/pushin-p.png';
        break;

      case sudurtak:
        fields = [
          allifret,
          djNizzy,
          simmivalur,
          justus
        ];
        url = 'https://rocketleague.is/sudurtak';
        image = 'https://i.ibb.co/4W1mwPJ/Sudurtak-darkmode.png';
        break;

      case vikingurO:
        fields = [
          gullos,
          stofer,
          snazz,
          rooneybangzon
        ];
        url = 'https://rocketleague.is/vikingur-olafsvik';
        image = 'https://i.ibb.co/gW2rqV6/Vikingur-Olafsvik-allmode.png';
        break;

      // default:
      // // code block
    }


    const exampleEmbed = new MessageEmbed()
      .setColor('#1c2e4a')
      .setTitle(`${teamName}`)
      .setURL(url)
      //.setDescription(description)
      .addFields(...fields)
      .setThumbnail(image)

    await interaction.reply({ content: null, embeds: [exampleEmbed] });
  }
};