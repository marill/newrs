const request = require('request');

describe('My test suite', () => {
    // Put all of your it tests here
    it("The 'toBe' matcher compares with ===", function() {
    	var a = 12;
    	var b = a;

    	expect(a).toBe(b);
    	expect(a).not.toBe(null);
  	});


    it('should respond with hello world', (done) => {
      request('http://localhost:3000/hello', (error, response, body) => {
        expect(body).toEqual('hello world');
        done();
      });
    });
});
