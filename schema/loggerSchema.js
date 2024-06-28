import mongoose from "../config/database.js";

const { Schema } = mongoose;

const loggerSchema = new Schema({
	timestamp: { type: Date, default: Date.now }, // Default to the current time
	ip: { type: String, required: true },
	userAgent: { type: String, required: true },
	method: { type: String, required: true },
	url: { type: String, required: true },
	referer: { type: String, required: false }
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const VisitorLog = mongoose.model('VisitorLog', loggerSchema);

export default VisitorLog;
