//this query must be run in the mongo shell
//first, type in "use crabs"
//afterwards, type in the following:
db.crabs.updateMany({nickname: "Sky"}, {$set:{species: "Flying crab"}})


//expected result:
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 25,
//     modifiedCount: 25,
//     upsertedCount: 0
//   }
//additionally, every single crab with the nickname "Sky" will have their species changed to "Flying crab"