const {deleteUser, addUser} = require('../controller/userController');
const expect = require('chai').expect;
const userData = require('../data-access/userData');


describe('user test', ()=>{
	const user1 = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
	  };
	  
	  const user4 = {
		firstName: 'Jonh',
		lastName: 'Doe',
		email: 'nicolas.doe@-example.com',
	  }
	  /*const user5 = {
		firstName: 'Aubain',
		lastName: 'Doe',
		email: 'john.doe@example.com',
	  }*/
	it('should save the user', () => {

	  addUser(user1);
	  
	  console.log('data : ', userData.data )

	  expect(userData.data).to.deep.include(user1);
	});
	
	it('should thorw an invalid input', ()=>{
		const user2 = { firstName: "John" }; 
		expect(() => addUser(user2)).to.throw("Missing required fields: firstName, lastName, or email");
	})
})