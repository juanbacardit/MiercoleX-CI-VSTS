
///../src/meme.js
describe("Modulo de generación de memes 'MemeGenerato' ",function(){
	it("el creador sin parametros", function(){
		var sut = new memeGenerator({model:"hello world", template:"template 1"});
		expect(sut.text === "hello world").toBeTruthy();
	});
	
});