let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    username = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while(true) {}
}

generateError('En error occurred!', 500);
