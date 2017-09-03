var mongoose = require('mongoose');

mongoose.Premise = global.Premise;
mongoose.connect('mongodb://localhost:27017/TodoApp2');

module.exports = {
//    mongoose: mongoose
    mongoose
};