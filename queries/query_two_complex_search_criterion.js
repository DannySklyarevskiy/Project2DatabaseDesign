//this query uses the aggregation pipeline
//the purpose of the query is to show all scientis who are either data analysts with a phd or hermit crab experts

//result is stored in queryResults/QueryTwoResult.json

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$match': {
      '$or': [
        {
          '$and': [
            {
              'job': 'Data Analyst'
            }, {
              'education': 'PhD'
            }
          ]
        }, {
          'job': 'Hermit Crab Expert'
        }
      ]
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('HermitCrabs').collection('scientists');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();