var express = require('express');
var bodyParser = require("body-parser");

var {mongoose} = require('./db/mongoose');
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
//   console.log(req.body); 
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(8080, () => {
    console.log('Start on port 8080.');
});

// var newTodo = new Todo({
//     text: 'Shopping',
//     completed: true,
//     completedAt: 242
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save doc.');
// });

// var newTodo2 = new Todo({
//     text: 'Buy milk',
//     completed: true,
//     completedAt: 342
// });

// newTodo2.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save doc.');
// });

// var newUser = new User({
//     email: 'someone@example.com'
// });

// newUser.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save doc.');
// });