//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5983ccd9449ace0916d22fb9')
    // },{
    //     $set:{
    //         complete: false
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //         console.log(result);
    // });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59928bf55be3f708bb173273')
    },{
        $set:{
            name: 'Sam'
        },
        $inc:{
            age: 2
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    
    // db.close();
});