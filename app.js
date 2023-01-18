function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if(resultType === 'as-number'){
    //     return +result
    //   }else{
    //     return result.toString()
    //   }
    return result;
}
var combineAges = combine(30, 26, "as-number");
console.log(combineAges);
var combineStrAges = combine("30", "26", "as-number");
console.log(combineStrAges);
var combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
