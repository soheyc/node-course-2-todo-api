//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to server.');

    // db.collection('Todos').find({
    //     //complete: false
    //     _id: new ObjectID('597c4ae4478e6b06d4d83e17')
    // }).toArray().then( (docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
   
    // db.collection('Todos').find({
    //     complete: false
    // }).count().then( (count) => {
    //     console.log(`Todos count:${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Adam'
    }).count().then( (count) => {
        console.log(`Adam count:${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
       
    db.close();
});