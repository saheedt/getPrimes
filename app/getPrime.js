'use strict';

module.exports = {

	/* Find prime numbers between 0 and n*/
	getprimes: (n) => {
		let output = [2], isPrime;
		if (n < 2){
			output = []
			return output;
		}
		if (!Number.isInteger(n)){
			output = []
			return output;
		}
  
  		for(let counter = 3; counter <= n; counter+=2 ){
    		isPrime = true;
    		for(let innerCounter = 0; innerCounter < output.length; innerCounter++ ){
      			if(counter % output[innerCounter] === 0){
        			isPrime = false;
        			break;
      			}
    		}
    		if(isPrime) output.push(counter);
  		}
  	return output;
	}
}