// database.js

import mongoose from 'mongoose';

const connectionURL = process.env.MONGO_URI || 'mongodb://localhost:27017/app?authSource=admin';

mongoose.connect(connectionURL).then(() => {
	console.log('MongoDB connected...');
}).catch(err => {
	console.error('Connection to MongoDB failed:', err.message);
	process.exit(1);
});

// Connection events
mongoose.connection.on('connected', () => {
	console.log('Mongoose connected to db...');
});

mongoose.connection.on('error', err => {
	console.error(err.message);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose connection is disconnected...');
});

// Close the connection if the node process ends
process.on('SIGINT', async () => {
	await mongoose.connection.close();
	process.exit(0);
});

export default mongoose;
