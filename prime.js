let number = parseInt(prompt("enter the a positive number"))
let i;
isprime = true;
if (number == 1) {
    console.log("the number is neither prime nor consenent")
}
else if (number > 1) {
    for (i = 2; i < number; i++) {

        if (number % i == 0) {


            isprime = false;
            break;
        }
    }
}
if (isprime) {
    console.log("the number is  prime")
}
else {
    console.log("the number is  not prime")
}
