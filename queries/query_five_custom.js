//this query is a custom query with no direct requierments
//the purpose of the query is to display the shell types of all the crabs with less than 10 well being

//result is stored in queryResults/QueryFiveResult.json

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$unwind': '$shells'
  }, {
    '$match': {
      'shells.well_being': {
        '$lt': 10
      }
    }
  }, {
    '$group': {
      '_id': '$shells.shell_type', 
      'crabs': {
        '$push': '$$ROOT'
      }
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('HermitCrabs').collection('crabs');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();