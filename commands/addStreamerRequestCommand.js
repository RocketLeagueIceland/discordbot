const { SlashCommandBuilder } = require('@discordjs/builders');
const { google } = require('googleapis');

const commandName = 'addstreamer';
const streamersSpreadsheetId = "19vqDFkD83C4Ev5hXwGpW_vDTQ75IMR9ElqZ-2MiCRZw"

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Sendu okkur twitch rásina þína til að sækja um að vera á á streamers listanum okkar.')
    .addStringOption(option =>
      option.setName('twitch-hlekkur')
        .setDescription('Hlekkur að twitch rásinni þinni')
        .setRequired(true)
    ),
  async execute(interaction) {
    
    console.log(interaction.member.guild.channels)

    var current = new Date();
    const twitchLink = interaction.options.getString('twitch-hlekkur');
    const nickname = interaction.member.nickname;
    const discordName = interaction.member.user.username;
    console.log(nickname, discordName)

    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance for auth
    const googleClient = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: googleClient });

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId: streamersSpreadsheetId,
      range: 'requests!A:C',
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[twitchLink,nickname,discordName,current.toLocaleTimeString()]],
      },
    });

    await interaction.reply({ content: 'Umsókn þín hefur verið skráð og verður skoðuð við tækifæri. Endilega láttu einhvern í stjórn vita að þú sóttir um ef þú færð ekki svar bráðum.', ephemeral: true });

    const channel = interaction.member.guild.channels.cache.get('738089976931156019');
    channel.send(`${discordName} (${nickname}) var að senda inn beiðni til að vera á streamer listanum.`);


  },
};




