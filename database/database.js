// database/database.js
import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dataAnalysis', {
      // dbName:"dataAnalysis",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};
