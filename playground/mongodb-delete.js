//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to server.');

    ////deleteMany
    // db.collection('Todos').deleteMany({text:'Something to do C'}).then((result) => {
    //     console.log(result);
    // });
    
    // //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch`'}).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Adam'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('59928bdd77c58708aa3ae571')}).then((result) => {
        //console.log(result);
        console.log(JSON.stringify(result, undefined, 2));
    });

    
    // db.close();
});