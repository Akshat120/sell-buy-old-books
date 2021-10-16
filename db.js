const dotenv = require('dotenv')
dotenv.config()
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  module.exports = client
  const app = require('./app')
  app.listen(3000,()=>{
    console.log('Server listening at 3000');
  })
})

