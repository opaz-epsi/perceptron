var Perceptron = require("./perceptron.js")
describe("Perceptron", function() {

    it("works", function() {
        var perceptron = new Perceptron();
        expect(perceptron.isWorking()).toBe(true);
    })
});