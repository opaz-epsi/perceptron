function Perceptron(threshold) {
    function isActive(input) {
        return input >= threshold;
    }

    function processOutput(input, weight) {
        return isActive(input) ? input * weight : 0;
    }

    function process(inputs, weights) {
        var result = 0;
        for(var i = 0; i < inputs.length; i++) {
            var input =  inputs[i];
            var weight =  weights[i];
            result += processOutput(input, weight);
        }
        return result;
    }

    return {
        isActive: isActive,
        process: process
    };
}

module.exports = Perceptron;