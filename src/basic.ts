function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //js- dynamic types(resolved at runtime) ts- ststic types (set during develpment)
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('inncorrect input!!!!');
  // }

  const result = n1+n2;
  if(showResult){
    console.log(phrase + result);
  }else
  return result;
  }
}
const number1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

