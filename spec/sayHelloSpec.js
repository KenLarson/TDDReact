var sayHello = require('../src/scripts/sayHello.js');
describe('Greet',function(){
it('concats Hello and a name',function(){
var actual = sayHello.greet();
var expected = 'Hello, Friend';
expect (actual).toEqual(expected);
    });


});