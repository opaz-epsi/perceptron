var Perceptron = require("./perceptron.js")
describe("Perceptron", function() {
    var perceptron;
    var THRESHOLD = 0.4;

    describe("with one input and one output", function() {

        beforeEach(function () {
            perceptron = new Perceptron(THRESHOLD);
        });

        function expectOutput(input, weight, output) {
            var result = perceptron.process(input, weight);
            expect(result).toEqual(output);
        }

        it("should output 0 if input 0", function() {
            expectOutput(0,0,0);
        });

        it("should output input*weight if input is over threshold", function() {
            var input = THRESHOLD + 0.1;
            var weight = 0.6;
            expectOutput(input,weight,input*weight);
        });

        it("should output 0 if input is below threshold", function() {
            var input = THRESHOLD - 0.1;
            expectOutput(input,1,0);
        });
    });

});