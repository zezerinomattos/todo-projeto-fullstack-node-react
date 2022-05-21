const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';

// para ele ter compatibilidade com outras versões de mongo
mongoose.connect(url, {useNewUrlParser: true}); 

//Para poder esse arquivo em outros lugares
module.exports = mongoose;