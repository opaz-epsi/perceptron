function Perceptron(threshold) {
    function process(input, weight) {
        if (input >= threshold) {
            return input * weight;
        }
        return 0;
    }

    return {
        process: process
    };
}

module.exports = Perceptron;