const express = require('express');
const moongose = require('mongoose');

const app = express();

moongose.connect('mongodb+srv://omnistack:omnistack@cluster0-8lr40.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(require('./routes'));

app.listen(3333);