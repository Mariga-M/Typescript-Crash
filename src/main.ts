//unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Caro';
if (typeof userInput === 'string') {
  userName = userInput;
}

//never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //while(true){}
}
const result = generateError('An error occurred!', 500);
console.log(result);
