
var PinkFloyd = (function () {

    var instance;
 	
 	//Create singleton instance
    function callTheBand() {

    	//Private properties / methods
		//    	

    	//Public properties / methods
        return {
        	
        	band 	: require('./data/band.json'),
    		members	: require('./data/members.json'),
    		albums 	: require('./data/albums.json'),

    		whatCanIAsk: function(){
    			var props 	= [];
    			var _this 	= this;

    			for(var p in _this){    				
    				props.push(p);
    			}
    			for(var k in _this.band){
    				props.push(k)
    			}
    			return props;
    		}
        }
    }

    function myBand(name){

    	if(!name){
    		console.log('A band without a name? What are you thinking!?')
    		return;
    	}
    	this.name = name;

    	//You can do whatever you want ...
    }
    myBand.prototype = callTheBand(); // Keep Pink Floyd essence
 
    return {
    	//Get instance
        rock: function () { 
            if (!instance) {
                instance = callTheBand();
                Object.freeze(instance);
            }
            return instance;
        },

        changeHistory: function(name){
        	return new myBand(name);
        }
    };
})();


module.exports = PinkFloyd;