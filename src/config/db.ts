import mongoose from 'mongoose';
import config from '../config'

const connectDB = async () => {
  console.log('Connecting to MongoDB')
  try {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(config.MONGO_URI)
    .then(() => console.log(`Successfully connected to database`))
    .catch(e => console.log(e))

  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
}

export default connectDB;