const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

moongose.connect('mongodb+srv://omnistack:omnistack@cluster0-8lr40.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);