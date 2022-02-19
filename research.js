const axios = require("axios");
const fs = require('fs');


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function init() {

  let players = [

    { id: 'Mooonmamba', platform: 'epic'},
    { id: 'IceNogla', platform: 'psn'},
    { id: 'nökkvi.', platform: 'epic'},
    { id: '76561198805970350', platform: 'steam'},
    { id: 'ivaroa88', platform: 'psn'},
    { id: '76561197985925701', platform: 'steam'},
    { id: 'iLikeCaves', platform: 'steam'},
    { id: 'Drbamboo', platform: 'steam'},
    { id: '76561198996617383', platform: 'steam'},
    { id: 'AYOOBABE', platform: 'psn'},
    //{ id: 'ydarHatign', platform: 'steam'},
    { id: 'snibberjohn', platform: 'steam'},
    { id: 'IamStony', platform: 'steam'},
    { id: 'realflexh', platform: 'steam'},
    // { id: 'jappinn', platform: 'steam'},
    { id: 'PaxoleOne', platform: 'steam'},
    // { id: 'FondNewt137', platform: 'epic'},
    { id: 'ómó', platform: 'epic'},
    { id: 'Krissi99', platform: 'epic'},
    { id: 'Njosna Ugla', platform: 'epic'},
    { id: 'JcB_RL', platform: 'epic'},
    { id: '76561198024583791', platform: 'steam'},
    { id: 'Ausa.', platform: 'steam'},

    { id: 'Fjallaskalli', platform: 'epic'},
    { id: 'Penguingod1310', platform: 'steam'},
    { id: '76561198095434939', platform: 'steam'},
    { id: 'Icelqnd', platform: 'steam'},
    { id: 'Aggi1223', platform: 'epic'},
    { id: '76561198438745522', platform: 'steam'},
    { id: 'gummift', platform: 'steam'},
    { id: 'arnaldureinars', platform: 'epic'},
    { id: 'valdif', platform: 'psn'},
    { id: 'Chaoz21', platform: 'steam'},
    

    { id: '76561198024583791', platform: 'steam'},
    { id: 'hlobbiklobbi', platform: 'steam'}, //ekki í deildinni
    { id: 'DontEatMyCereal', platform: 'steam'},
    { id: '76561198037737307', platform: 'steam'},
    { id: 'daninn', platform: 'steam'},
    // { id: 'Pulsa með öllu', platform: 'epic'},
    { id: 'Creaming_monkeyy', platform: 'epic'},
    { id: 'Alliprogamer321', platform: 'epic'},
    { id: 'Llavers', platform: 'steam'},
    { id: 'TheGamingKraken', platform: 'steam'},
    { id: 'iQuzi', platform: 'steam'},
    // { id: 'KrissiAgust', platform: 'psn'},
    { id: 'ItsMunxy', platform: 'epic'},
    { id: 'ostakaka', platform: 'steam'},
    { id: '76561198057403787', platform: 'steam'},
    // { id: '76561199177443122', platform: 'steam'},

    { id: 'snassi2607', platform: 'steam'},
    { id: '76561198152099921', platform: 'steam'},
    { id: '76561198068845537', platform: 'steam'},
    { id: 'slapi36', platform: 'steam'},
    { id: 'EinarEinarsson', platform: 'steam'},
    { id: '76561198438745522', platform: 'steam'},
    { id: 'andriasgeir', platform: 'steam'},
    //{ id: 'jonthorarinn', platform: 'steam'},
    { id: 'bafga', platform: 'steam'},
    { id: 'Cleansman22', platform: 'psn'},
    { id: 'Flinxon', platform: 'steam'},
    { id: '76561198172429331', platform: 'steam'},
    { id: '76561198173301494', platform: 'steam'},
    { id: 'DoginCamera', platform: 'steam'},
    { id: 'Presley93', platform: 'steam'},
    { id: 'allifret', platform: 'steam'},
    //{ id: 'KramerBeLimpin', platform: 'psn'},
    { id: '76561198091576648', platform: 'steam'},
    { id: '354hersir', platform: 'steam'},
    { id: 'sizophrenic', platform: 'steam'},
    { id: 'Skorrz00', platform: 'psn'},
    { id: 'steaksoup3', platform: 'steam'},
    { id: '76561197963076102', platform: 'steam'},
    { id: 'stori', platform: 'steam'},
    { id: 'pabbi4', platform: 'steam'},
    { id: 'brynjarorn97', platform: 'steam'},
    { id: 'AronRaafn', platform: 'epic'},
    { id: 'Wunderberg', platform: 'steam'},
    { id: '76561198082572967', platform: 'steam'},
    { id: 'bjarnifraendi', platform: 'steam'},
    { id: 'olitr', platform: 'steam'},
    { id: 'Pyrolatri', platform: 'steam'},
    { id: 'grogg88', platform: 'epic'},
    { id: 'RikkiBesti', platform: 'steam'},
    { id: 'Davidharalds', platform: 'psn'},
    { id: '76561198164913341', platform: 'steam'},
    { id: 'smivar', platform: 'steam'},
    { id: 'Sofasett', platform: 'steam'},
    { id: 'SaltSkeggur', platform: 'steam'},
    { id: 'Steini-666', platform: 'epic'},
    { id: 'n0ra_NOCCO', platform: 'psn'},
    { id: 'jengamundur', platform: 'steam'},
    { id: 'ageir9', platform: 'steam'},
    { id: 'joibje', platform: 'epic'},
    { id: 'Lothin', platform: 'steam'},
    { id: 'CertifiedNaldo', platform: 'psn'},
    { id: 'Miklireynir ジ', platform: 'epic'},
    { id: 'Frussmeistari', platform: 'steam'},
    { id: 't0mah4wk', platform: 'steam'},
    { id: '76561197972089099', platform: 'steam'},
    { id: 'stebbano', platform: 'steam'},
    { id: 'EmilVald', platform: 'steam'},
    { id: 'RoadmanGK3', platform: 'psn'},
    { id: 'CMBobbi', platform: 'steam'},
    { id: '76561198082572967', platform: 'steam'},
    { id: 'gisliorn', platform: 'steam'},
    { id: 'smushballs', platform: 'steam'},
    { id: 'Gullos10', platform: 'steam'},
    { id: 'Krokur', platform: 'steam'},
    { id: 'RAFIKISWAK', platform: 'steam'},
    { id: '76561198142455496', platform: 'steam'},
    //{ id: 'danielrokkvi', platform: 'steam'},
    { id: 'dabbi789', platform: 'steam'},
    { id: 'Davidkuld', platform: 'psn'},
    { id: '76561198145821819', platform: 'steam'},
    { id: 'Kartofla', platform: 'steam'},
    { id: '76561198988527025', platform: 'steam'},
    { id: '76561198303334918', platform: 'steam'},
    { id: 'FluffyDog716', platform: 'epic'},
    { id: 'handygoon', platform: 'epic'},
    { id: 'Guccmundur', platform: 'psn'},
    { id: '76561198057733130', platform: 'steam'},
    { id: 'Fanarito', platform: 'steam'},
    { id: 'pepsicola.coca', platform: 'epic'},
    { id: 'ousic', platform: 'steam'},
    { id: 'yung-actavis', platform: 'psn'},
    { id: 'Tharmagustur', platform: 'epic'},
    { id: 'portkona', platform: 'steam'},
    { id: 'yyilfi', platform: 'steam'},
    { id: '76561198072113176', platform: 'steam'},
    { id: 'BBergs', platform: 'steam'},
    { id: '76561198098137139', platform: 'steam'},
    { id: 'mundi29', platform: 'steam'},
    { id: 'vaddimah', platform: 'steam'},
    { id: 'Purpadrank-', platform: 'psn'},
    { id: '76561198284400165', platform: 'steam'},
    { id: '76561198253762117', platform: 'steam'},
    { id: 'mediumvape', platform: 'steam'},
    { id: 'aunnsteinsson', platform: 'steam'},
    { id: '76561198353089658', platform: 'steam'},
    { id: 'ChefLxi', platform: 'steam'},
    { id: 'AriGauti', platform: 'steam'},
    { id: 'Pungurinn', platform: 'steam'},
    { id: '76561198002261949', platform: 'steam'},
    { id: 'SynergeticYT', platform: 'steam'},
    { id: 'hemmigumm', platform: 'steam'},
    { id: 'wombocomboturbo', platform: 'steam'},
    { id: 'ebbibolla', platform: 'epic'},

  
    //{ id: 'Kuьа', platform: 'epic'},
    
  ]
  
  let ts = new Date();
  for (let i = 0; i < players.length; i++){
    let url = encodeURI(`https://api.tracker.gg/api/v2/rocket-league/standard/profile/${players[i].platform}/${players[i].id}`)
    axios.get(url,
      {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
        }
      }).then(resp => {
  
        //console.log(resp.data.data.segments)
        try {
          let name = resp.data.data.platformInfo.platformUserHandle
          let onevoneRating = resp.data.data.segments.find(o => o.attributes.playlistId == 10).stats.rating.value
          let twovtwoRating = resp.data.data.segments.find(o => o.attributes.playlistId == 11).stats.rating.value
          let threevthreeRating = resp.data.data.segments.find(o => o.attributes.playlistId == 13).stats.rating.value
  
          //fs.writeFileSync('players.csv', `${name},${onevoneRating},${twovtwoRating},${threevthreeRating}`,  { flag: 'a'})
          
          fs.appendFile(`playersMMR/players${ts.toISOString().split('.')[0].replace(/:/g, '')}.csv`, `${name},${players[i].id},${onevoneRating},${twovtwoRating},${threevthreeRating}\r\n`, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('mmr added to file.');
          });
        

        } catch (err) {
          console.error(err)
        }
  
      });
    await sleep(1000);
  }
  // let url = "https://api.tracker.gg/api/v2/rocket-league/standard/profile/steam/dingoremote"
  // axios.get(url,
  //   {
  //     headers: {
  //       'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0"
  //     }
  //   }).then(resp => {
  //     console.log(resp.data.data.segments)
  //   });
  
  
  
  // onevoneRating = data.data.segments.find(o => o.attributes.playlistId == 10).stats.rating.value
  // twovtwoRating = data.data.segments.find(o => o.attributes.playlistId == 11).stats.rating.value
  // threevthreeRating = data.data.segments.find(o => o.attributes.playlistId == 13).stats.rating.value
  // hoopsRating = data.data.segments.find(o => o.attributes.playlistId == 27).stats.rating.value
}

init();