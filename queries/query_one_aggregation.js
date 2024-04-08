//this query uses the aggregation pipeline
//the purpose of the query is to count the total mass of shells produced by every single printer

//result is stored in queryResults/QueryOneResult.json

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$unwind': {
      'path': '$printers'
    }
  }, {
    '$unwind': {
      'path': '$printers.3D_shells'
    }
  }, {
    '$group': {
      '_id': '$printers.printer_id', 
      'totalMass': {
        '$sum': '$printers.3D_shells.mass'
      }
    }
  }, {
    '$sort': {
      'totalMass': -1
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('HermitCrabs').collection('factories');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();