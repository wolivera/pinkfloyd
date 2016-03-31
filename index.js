'use strict';

var PinkFloyd = (function () {

    var instance;
 	
 	//Create instance
    function createBand() {

    	//Private properties / methods
    	var band 	= require('./data/band.json');
    	var members = require('./data/members.json');
    	var albums 	= require('./data/albums.json');

    	//Public properties / methods
        return {
        	
        	band: function(){

        		return this.band;
        	},

        	members: function(){

        		return this.members;
        	},

        	albums: function(){

        		return this.albums;
        	}
        }
    }
 
    return {
    	//Get instance
        rock: function () { 
            if (!instance) {
                instance = createBand();
            }
            return instance;
        }
    };
})();


module.exports = PinkFloyd;