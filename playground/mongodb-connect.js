//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    
    console.log('Connected to server.');
    
    db.collection('Todos').insertOne({
        text: 'Something to do F`',
        complete: true
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo.', err);
        }
        
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    // db.collection('Users').insertOne({
    //     name: 'Adam',
    //     age: 22,
    //     location: 'small town'
    // }, (err, result) => {
    //     if(err){
    //         return 'Unable to insert user';
    //     }
        
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    
    db.close();
});