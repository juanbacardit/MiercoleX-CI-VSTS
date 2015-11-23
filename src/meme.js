class memeGenerator {

	constructor(options) {
		this.text = options.model;
		this.template = options.template;
	}

	render() {
		console.log(this.text + " meme " + this.template);
	}		
};

