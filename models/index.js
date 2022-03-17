// this will be my database that the server queries for data!

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/recess';

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  mongoose.connect(connectionString, configOptions) 
    .then(() => console.log('You\'ve got recess! ' + mongoose.connection.host + ': ' + mongoose.connection.port))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));
  
  