import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import fetch from 'node-fetch'

admin.initializeApp({
  credential: admin.credential.cert(require('../key/serviceAccountKey.json')),
})

export const updateRiotTrees = functions.https.onRequest((request, response) => {
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
                  response.send(snapshot.writeTime)
                })
                .catch((e) => {
                  console.log(e)
                  response.status(500).send(e)
                })
        })
        .catch((e) => response.status(500).send(e))
    })
    .catch()
})
