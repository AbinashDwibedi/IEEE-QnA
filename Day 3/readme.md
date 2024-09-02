# Day 3 Questions and Answers 

## Write a function that checks if a given number is a perfect number. A perfect number is equal to the sum of its proper divisors (excluding itself).

* code
```js
function checkPerfect(num){
    let i, sum=0;
    for(i=1;i<num;i++){
        if(num%i==0){
            sum+=i
        }
    }
    return sum==num
}
console.log(checkPerfect(28))
//output : true
```

## Write a function that checks if a given integer is a palindrome. A palindrome number remains the same when its digits are reversed.

* code 
```js
function checkPalindrome(num){
    let newNum=0, realNum =num;
    while(num>0){
        newNum = newNum*10 + num%10;
        num = Number.parseInt(num/10);
    }
    return newNum==realNum ? true : false;
}
console.log(checkPalindrome(121));
//output : true
```

## Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

* code 
```js
function countVowels(str){
    let count=0 , i;
    for(i=0 ;i<str.length;i++){
        switch(str[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                count++
        }
    }
    return count
}
console.log(countVowels(`Hello, World!`))
//output : 3
```

##  Write a function that reverses a given list of integers.

* code
```js

function reverseInt(numArr){
    let i,newArr=[];
    for(i=numArr.length-1;i>=0;i--){
        newArr.push(numArr[i])
    }
    return newArr;
}
console.log(reverseInt([1, 2, 3, 4, 5]));
//output : [ 5, 4, 3, 2, 1 ]

```

## Write a function that calculates the factorial of a non-negative integer.

* code 
```js
function calcFact(num){
    if(num==0){
        return 1;
    }
    return num*calcFact(num-1);
}
console.log(calcFact(5));
//output: 120
```
