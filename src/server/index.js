const express = require('express'),
cors = require('cors'),
port = process.env.PORT || 3001,
massive = require('massive'),
bodyParser = require('body-parser'),
ctrl = require('./controller');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive('postgres://ammcjnlzqaxrdb:66b8dd9fd7beb068fa4572fc0d4e082cbeec568b50b474167a12b3e90830ef37@ec2-174-129-221-240.compute-1.amazonaws.com:5432/d4c32oqvdj6bag?ssl=true').then( db => {
      app.set('db', db);
      app.listen(port, () => {
      console.log(`Server listening on port ${port}...`)
      });
})

