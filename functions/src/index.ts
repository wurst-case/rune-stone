import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import fetch from 'node-fetch'

admin.initializeApp({
  credential: admin.credential.cert(require('../key/serviceAccountKey.json')),
})

// Custom Claims
exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add custom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      })
    })
    .then(() => {
      return { message: `Success! ${data.email} has been made an admin` }
    })
    .catch((err) => err)
})

// Updating Data to Current Riot Version every minute
exports.scheduledUpdateRiotTrees = functions.pubsub.schedule('* * * * *').onRun((_context) => {
  // Get perks object from riot api
  const versionsUrl = 'https://ddragon.leagueoflegends.com/api/versions.json'
  const url = ['https://ddragon.leagueoflegends.com/cdn/', '/data/en_US/runesReforged.json']
  const riotAssetUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'
  fetch(versionsUrl)
    .then((_response) => _response.json())
    .then((versions) => {
      const version = versions[0]
      fetch(url[0] + version + url[1])
        .then((_response) => _response.json())
        .then((perks) => {
          // Update paths with new perk values
          if (perks)
            for (let i = 0; i < 5; i++)
              admin
                .firestore()
                .doc('paths/' + perks[i].name.toLowerCase())
                .update({
                  name: perks[i].name, // Set name from perks object
                  img: riotAssetUrl + perks[i].icon, // Set icon from perks object
                  slots: perks[i].slots, // Set all updated slots
                  version: version,
                })
                .then((snapshot) => {
                  console.log('version: ', version, 'json fetched from: ', url[0] + version + url[1], 'json: ', perks)
                })
                .catch((e) => console.log(e))
        })
        .then(() => {
          admin
            .firestore()
            .collection('version_data')
            .doc('version')
            .update({ live: version, lastUpdate: Date() })
            .then((_r) => console.log(_r))
            .catch((_err) => console.log(_err))
        })
        .catch((e) => console.log(e))
    })
    .catch((e) => console.log(e))
})

exports.rollbackToSafeVersion = functions.https.onCall((data, _context) => {
  // Get perks object from riot api
  const version = '10.14.1'
  const staticUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`
  const riotAssetUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'
  fetch(staticUrl)
    .then((_response) => _response.json())
    .then((perks) => {
      // Update paths with new perk values
      if (perks)
        for (let i = 0; i < 5; i++)
          admin
            .firestore()
            .doc('paths/' + perks[i].name.toLowerCase())
            .update({
              name: perks[i].name, // Set name from perks object
              img: riotAssetUrl + perks[i].icon, // Set icon from perks object
              slots: perks[i].slots, // Set all updated slots
              version: version,
            })
            .then((snapshot) => {
              console.log('version: ', version, 'json fetched from: ', staticUrl, 'json: ', perks)
              data.send(snapshot.writeTime)
            })
            .catch((e) => {
              console.log(e)
              data.status(500).send(e)
            })
    })
    .then(() => {
      admin
        .firestore()
        .collection('version_data')
        .doc('version')
        .update({ live: version })
        .then((_r) => console.log(_r))
        .catch((_err) => console.log(_err))
    })
    .catch((e) => data.status(500).send(e))
})
