"use strict";

// export class memeGenerator {
// 	
// 	constructor(options) {
// 		this.text = options.model;
// 		this.template = options.template;
// 	};
// 	
// 	render() {
// 		console.log(this.text + " meme " + this.template);
// 	};		
// };

var memeGenerator = (function(){
	var memeGenerator = function(options){
		this.text = options.model;
		this.template = options.template;
		this.render = function(){
			console.log(this.text + " meme " + this.template);
		};	
	};
	return memeGenerator;
})();





