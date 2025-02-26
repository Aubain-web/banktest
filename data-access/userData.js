const {user} = require('./userSchema');

class UserData {
	constructor(){
		this.data = []
	}
	
	add(user) {
		this.data.push(user)
	}
	
	deleteUser(email){
		this.data = this.data.filter(user => user.email !== email);
	}
	
	
	
}

const userData = new UserData();
module.exports = userData;