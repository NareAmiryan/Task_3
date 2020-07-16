//1-st exercise
let number_1 = 17;
if(number_1 % 2 == 0){
    alert("the number is even")
} else {
    alert("the number is odd")
}

//2-nd exercise
let number_2 = 13;
let sum=0;
for(i = 1; i <= number_2; i++){
    if(i % 2 == 1){
        sum += i;
    }
}
alert("The sum of all odd numbers between 1 and n is : " + sum );

//3-rd exercise 
let a_upper_bound = 18;
let b_num = 14;
let c_lower_bound = 9;
if(b_num < a_upper_bound && b_num > c_lower_bound ){
    alert("In bounds");
} else {
    alert("Out of bounds");
}

//4-th exercise 
let a = 14;
let b = 18;
let c = 11;
if(a + b > c && b + c > a && a + c > b ){
    alert("Yes,the triangle is valid")
} else {
    alert("No,the triangle isn't valid")
}