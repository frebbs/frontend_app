import Logger from '../schema/loggerSchema.js';  // Import the Mongoose model

export default function (req, res, next) {
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	const userAgent = req.headers['user-agent']; // Capture the user agent
	const method = req.method; // HTTP method (GET, POST, etc.)
	const url = req.url; // The URL requested
	const referer = req.headers['referer'] || req.headers['referrer']; // HTTP referer

	// Create a new log entry using the VisitorLog model
	const logEntry = new Logger({
		ip,
		userAgent,
		method,
		url,
		referer
	});

	// Save the log entry to the database
	logEntry.save().then(() => {
		console.log('Log saved to database');
	}).catch(err => {
		console.error('Error saving log to database:', err);
	});

	next(); // Proceed to the next middleware
}
