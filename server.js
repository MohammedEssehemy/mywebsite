const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const morgan = require('morgan');
// process.env.NODE_ENV = "test"; // setting environment before require config  
const config = require('config');

//reauire routes
const messages = require('./routes/messages');
const users = require('./routes/users');


// connect to mongo
mongoose.connect(config.database);
// mongo connected successfully
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo on: '+config.database);
});
// Mongo connection error
mongoose.connection.on('error',(err)=>{
    console.log('connection error: '+err);
});
// initaiate app
const app = express();


//middlewares
// cors middleware
app.use(cors());
//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
app.use(morgan('dev'));
}
// parse request body
app.use(bodyParser.json());
// stay with the query string form not qs
app.use(bodyParser.urlencoded({extended: false}));
// favicon in public/favicon.ico
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// express static folder (public)
app.use(express.static(path.join(__dirname, 'public')));


// backend APIs
app.use('/api/msgs',messages);
app.use('/api/users',users);
// frontend Router
app.use('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// port for the website
const port = process.env.port || 9242;
// listen to the port and logging verifying msg
app.listen(port,()=>{
    console.log("server is listening on port: ",port);
});