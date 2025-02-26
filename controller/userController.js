const UserService = require('../business/userService');
const { isValideInput } = require('../utils/valideInput');
const { isValidEmail } = require('../utils/validEmail');
const userService = new UserService
const userData = require('../data-access/userData').data

const addUser = (user) =>{
	try {
		const exist = userData.find(u => u.email === user.email)
		if (!user || typeof user !== 'object') {
			throw new Error("Invalid user object");
		}

		if (!user.firstName || !user.lastName || !user.email) {
			throw new Error("Missing required fields: firstName, lastName, or email");
		}

		if (!isValideInput(user.firstName)) {
			throw new Error("Invalid firstName");
		}
		if (!isValideInput(user.lastName)) {
			throw new Error("Invalid lastName");
		}

		if (!isValidEmail(user.email)) {
			throw new Error("Invalid email");
		}
		
		if(exist){
			throw new Error("user already registered")
		}

		userService.addUser(user);

		return "User added successfully";
	} catch (err) {
		throw new Error(`Cannot persist the user: ${err.message}`);
	}
}

const deleteUser = () => {
	try{
		userService.deleteUser(user)
	}catch(err){
		throw new err(`cannot find the user : ${err.message}`)
	}
}

module.exports = {deleteUser, addUser}