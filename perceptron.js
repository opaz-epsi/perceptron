function Perceptron(threshold, outputCount) {
    function isActive(input) {
        return input >= threshold;
    }

    function processOutput(input, weight) {
        return isActive(input) ? input * weight : 0;
    }

    function initOutputs() {
        var result = [];
        for (var i = 0; i < outputCount; i++) result[i] = 0;
        return result;
    }

    function process(inputs, weights) {
        var result = initOutputs();

        for (var i = 0; i < inputs.length; i++) {
            for (var j = 0; j < outputCount; j++) {
                var input = inputs[i];
                var weight = weights[i][j];
                result[j] += processOutput(input, weight);
            }
        }
        return result;
    }

    return {
        isActive: isActive,
        process: process
    };
}
if(module != undefined) {
    module.exports = Perceptron;
}
