const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

const app = express();

app.use(cors);
app.use(cookieParser);

app.get('/', (req, res) => res.send("Hello World"));

exports.app = functions.https.onRequest(app);

exports.date = functions.https.onRequest((req, res) => {
  res.send(new Date())
});
