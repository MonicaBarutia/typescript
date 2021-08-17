"use strict";
var userInput;
var username;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {}
}
generateError('En error occurred!', 500);
