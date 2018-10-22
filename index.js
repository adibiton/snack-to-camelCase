'use strict'
module.exports = (str) => 
{ 	
	if(str.includes('-')) 	 	
		return str 	 			
			.split('-')
			.map((word, i) => i > 0 ? word[0].toUpperCase() + word.substring(1) : word)
 			.join('') 	
	 return str
}