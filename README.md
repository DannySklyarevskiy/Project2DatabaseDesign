# Project2DatabaseDesign

# Task 1
Provide the problem requirements and the conceptual model in UML for your project. You can reuse the ones made in Project 1.

This can be found in https://github.com/DannySklyarevskiy/Project2DatabaseDesign/blob/main/Hermit%20Crab%20Project%20Overview.pdf

# Task 2
Adapt the Logical Data model from your Project 2 to have hierarchical tables. This is, main (root) tables from which all the other tables relate to. This main tables will become later your Mongo Collections. From your main tables you can have aggregation/composition, one to many and many to many relationships.

This can be found in https://github.com/DannySklyarevskiy/Project2DatabaseDesign/blob/main/Hermit%20Crab%20Project%20Overview.pdf


# Task 3
From this logical model define the main Collections (Documents/Tables) you will be using in your Mongo Database. Provide a couple of JSON examples of these objects with comments when necessary. Think about a document that you will give to another database engineer that would take over your database.

This can be found in 
https://github.com/DannySklyarevskiy/Project2DatabaseDesign/tree/main/exampleCollections

# Task 4 
Populate the tables with test data. You can use tools such as https://www.mockaroo.com/schemasLinks to an external site. or  https://www.generatedata.com/Links to an external site.. You can export the sample data to JSON and then use mongoimport or Mongo Compass to populate your tables. Include in your repository a dump file that can be use to regenerate your database, and the instructions on how to initialize it. You should share the instructions on how to import these data into tables by providing the data in JSON format and instructions on how to load it using mongoImport or mongo Compass

First, connect to MongoDBCompass and create a new database called HermitCrabs
There, make 3 collections: crabs, factories, and scientists
For each collection, click ADD DATA -> Import JSON and import the respective files for each database based on their names

The files to do this can be found in https://github.com/DannySklyarevskiy/Project2DatabaseDesign/tree/main/usedCollections

# Task 5
Define and execute at least five queries that show your database. At least one query must use the aggregation framework https://docs.mongodb.com/manual/aggregation/Links to an external site., one must contain a complex search criterion (more than one expression with logical connectors like $or), one should be counting documents for an specific user, and one must be updating a document based on a query parameter (e.g. flipping on or off a boolean attribute for a document, such as enabling/disabling a song)

The queries and their results can all be found in https://github.com/DannySklyarevskiy/Project2DatabaseDesign/tree/main/queries
