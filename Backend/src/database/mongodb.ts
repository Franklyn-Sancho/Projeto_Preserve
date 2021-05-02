import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.Promise = global.Promise;

const config = {
  uri: `${process.env.DATABASE}`,
  options: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
}

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.');
})

mongoose.connection.on('error', () => {
  console.log('Could not connect to database.');
})

const database = { 
  connect: () => mongoose.connect(config.uri, config.options) 
} 

export default database;