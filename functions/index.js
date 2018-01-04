const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const api = require('./api')
const app = functions.https.onRequest(api);

const date = functions.https.onRequest((req, res) => {
  res.send(new Date())
});

module.exports = {
  date,
  app
}
