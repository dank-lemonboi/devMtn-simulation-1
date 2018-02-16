const express = require('express'),
      cors = require('cors'),
      port = process.env.PORT || 3001,
      massive = require('massive');


const app = express();

app.use(bodyParser.json());
app.use(cors());