'use strict';

var PinkFloyd = require('./index');

//Test the app
function test() {
 
    var band1 = PinkFloyd.rock();
    var band2 = PinkFloyd.rock();
 
    console.log("Is this band unique? " + (band1 === band2));  
}

//Init tests

test();