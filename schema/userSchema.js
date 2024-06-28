import mongoose from "../config/database.js";

const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: String, // String is shorthand for {type: String}
	lastName: String,
	email: String,
	password: String,
	created: { type: Date, default: Date.now },
	meta: {
		votes: Number,
	}
});

const User = mongoose.model('User', userSchema);

export default User;