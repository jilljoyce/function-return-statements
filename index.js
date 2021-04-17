// checking if a number is big
function number100(number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    }
}

console.log(number100(100));
const result = number100(300);
console.log(result);
//produce function


// bouncer at a club
function clubAccess(numberMax, numberCur, age) {
    if (age < 18) {
        return "this is a club for adults";
    }
    if (numberCur === numberMax) {
        return "it's too busy now, come back later";
    }
    else {
        return "come in";
    }
}

console.log(clubAccess(70, 70, 20)); //its too busy now
console.log(clubAccess(70, 50, 12)); //club for aduls
console.log(clubAccess(70, 50, 20)); //come in
//do and produce function

//calculating the average
function average(number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return Math.round(sum);
}

console.log(average(3,7,4,2,7));
console.log(average(10,20,10,20,15));
//producte functions
