import User from "../../schema/userSchema.js";

const rootController_GET = {
	home: (req, res) => {
		res.render('home');
	},
	contact: (req, res) => {
		res.render('contact');
	},
	about: (req, res) => {
		res.render('about');
	},
	listUsers: (req, res) => {
		User.find(undefined, undefined, undefined)
			.then((users) => {
				return res.json({
					users: users
				});
			})
			.catch((error) => {
				return res.status(500).json({
					message: "Error",
					error: error
				});
			});
	}
};

const rootController_POST = {
	saveUser: async (req, res) => {

		const {firstName, lastName, email, password} = req.body;

		const newUser = new User({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		});

		console.log(newUser);

		await newUser.save()
			.then((data) => {
				return res.json({
					message: "Saved User",
					data: data
				});
			})
			.catch((error) => {
				return res.status(500).json({
					message: "Error",
					error: error
				});
			});
	}
};

export { rootController_GET, rootController_POST};