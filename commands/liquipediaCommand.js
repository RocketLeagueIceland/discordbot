const { SlashCommandBuilder } = require('@discordjs/builders');

const commandName = 'liquipedia';
const season3 = 'tímabil-3'
const season4 = 'tímabil-4'
const season5 = 'tímabil-5'
const season6 = 'tímabil-6'
const optionName = 'season';

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Sóttu Liquipedia slóð fyrir eitthvert tímabil.')
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
    let liquipediaUrl = 'https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_6/League_Play';

    switch (option) {

      case season6:
        liquipediaUrl = 'https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_6/League_Play';
        break;

      case season5:
        liquipediaUrl = 'https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_5/League_Play';
        break;

      case season4:
        liquipediaUrl = 'https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_4/League_Play';
        break;

      case season3:
        liquipediaUrl = 'https://liquipedia.net/rocketleague/Icelandic_Esports_League/Season_3';
        break;

      default:
        console.log('we should never reach this default actually.')
    }

    await interaction.reply({ content: liquipediaUrl });
  },
};




