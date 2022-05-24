const { SlashCommandBuilder } = require('@discordjs/builders');

const commandName = 'ballchasing';
const season3 = 'tímabil-3'
const season4 = 'tímabil-4'
const optionName = 'season';

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Sóttu Úrvalsdeildar tölfræði fyrir eitthvert tímabil')
    .addStringOption(option =>
      option.setName(optionName)
        .setDescription('Veldu tímabil')
        .setRequired(true)
        .addChoice(season4, season4)
        .addChoice(season3, season3)
    ),
  async execute(interaction) {

    let option = interaction.options.getString(optionName);
    let ballchasingUrl = 'https://ballchasing.com/group/arena-deildin-s4-rlis-7flsdy257b ';

    switch (option) {

      case season4:
        ballchasingUrl = 'https://ballchasing.com/group/arena-deildin-s4-rlis-7flsdy257b ';
        break;

      case season3:
        ballchasingUrl = 'https://ballchasing.com/group/turf-rocket-league-season-3-y7bzc4zvs0';
        break;

      default:
        console.log('we should never reach this default actually.')
    }

    await interaction.reply({ content: ballchasingUrl });
  },
};




