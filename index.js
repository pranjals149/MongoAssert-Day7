const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbname = 'day7';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log("Connection Successfull");
    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name": "aalloo", "Description": "Tasty"}, (err, result) => {
        assert.equal(err, null);
        console.log(result.ops);
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                client.close();
            })
        })
    })
})