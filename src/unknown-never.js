//unknown
var userInput;
var userName;
userInput = 5;
userInput = 'Caro';
if (typeof userInput === 'string') {
    userName = userInput;
}
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
