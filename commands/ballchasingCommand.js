const { SlashCommandBuilder } = require('@discordjs/builders');

const commandName = 'ballchasing';
const season3 = 'tímabil-3'
const season4 = 'tímabil-4'
const season5 = 'tímabil-5'
const season6 = 'tímabil-6'
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
        .addChoice(season5, season5)
        .addChoice(season6, season6)
    ),
  async execute(interaction) {

    let option = interaction.options.getString(optionName);
    let ballchasingUrl = 'https://ballchasing.com/group/rlis-deildin-season-6-aawd9cfelp';

    switch (option) {

      case season6:
        ballchasingUrl = 'https://ballchasing.com/group/rlis-deildin-season-6-aawd9cfelp';
        break;

      case season5:
        ballchasingUrl = 'https://ballchasing.com/group/arena-deildin-timabil-5-c143468n00';
        break;

      case season4:
        ballchasingUrl = 'https://ballchasing.com/group/arena-deildin-s4-rlis-7flsdy257b';
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




