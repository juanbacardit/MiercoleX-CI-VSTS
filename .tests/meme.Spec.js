
///../meme.js
describe("Modulo de generación de memes 'MemeGenerato' ",function(){
	it("el creador sin parametros", function(){
		var sut = new memeGenerator();
		expect(sut.text === undefined).toBeTruthy();
	});
	
});