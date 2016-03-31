'use strict';

var PinkFloyd = require('./index');

//Test the app
function test() {
 
    var pf 		= PinkFloyd.rock();
    var band2 	= PinkFloyd.rock();
 
    console.log("Is this band unique? " + (pf === band2));  

    console.log(pf.whatCanIAsk());

    console.log('Founded: ' + pf.band.founded);

    /////

    var b1 = PinkFloyd.changeHistory();

    var yeah = PinkFloyd.changeHistory('Yeah!');

    yeah.band.founded = '2016';
    console.log(yeah.band.name);
    console.log(yeah.band.founded);
}

//Init tests

test();