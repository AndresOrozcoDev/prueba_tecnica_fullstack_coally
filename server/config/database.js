const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task-manager-db';
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with an error
    }
};

module.exports = connectToDatabase;
