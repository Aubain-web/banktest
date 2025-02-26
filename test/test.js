const math = require('../math').Math;
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('math testing modules', ()=>{
	it('should return 0', ()=>{
		assert.strictEqual(math(0,0),0);
	});
	it('should return 1', ()=>{
		assert.strictEqual(math(1,0),1);
	})
	it('should throw an error if arguments are not numbers', () => {
	expect(() => math('a', 2)).to.throw('should be a number');
	expect(() => math(1, 'b')).to.throw('should be a number');
	expect(() => math('a', 'b')).to.throw('should be a number');
  });
  it('should return  negative number', ()=>{
	expect(math(5, -45)).to.equal(-40);
  })
})
