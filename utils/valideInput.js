
function isValideInput(input){
	 if (typeof input !== 'string') {
        return "Input must be a string";
    }
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) { 
            return `Input contains a number: ${input[i]}`;
        }
    }

    return true;
}

module.exports = {isValideInput}