function add(n1, n2, showResult, phrase) {
    // if(n1 !== 'number' || n2 !== 'number'){
    //     throw new Error('Incorrect Input')
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = "Result is : ";
add(number1, number2, printResult, resultPhase);
