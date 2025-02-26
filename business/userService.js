const userData = require('../data-access/userData')
//const userData = new UserData
//const user = require('../data-access/userSchema')
//const User = new user


class UserService {
	addUser(user){
		userData.add(user)
	}
	
	deleteUser(email){
		userData.deleteUser(email)
	}
}

module.exports = UserService