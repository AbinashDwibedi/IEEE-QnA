# Day 4 Questions and Answers

## Armstrong Number Checker: Write a function that checks if a given number is an Armstrong number. An Armstrong number of n digits is equal to the sum of its digits each raised to the power of n.

* code

```js 
function checkArmstrong(num){
    let realNum = num ,sum=0,count=0;
    while(num>0){
        count++;
        num = Number.parseInt(num/10);
    }
    num = realNum;
    while(num>0){
        sum = sum + Math.pow((num%10),count);
        num = Number.parseInt(num/10);
    }
    return realNum==sum ? true : false
}
console.log(checkArmstrong(153));
//output : true
```

## Anagram Checker: Write a function that checks if two given strings are anagrams. Two strings are anagrams if they contain the same characters in the same frequency.

* code 
```js 
function checkAnagram(str1 , str2){
    if(str1.length != str2.length){
        return false
    }
    
    else{
        return str1.split("").every(char => str2.includes(char))
    }
}

console.log(checkAnagram("listen", "silent"));
//output : true
```

## Sum of Even Numbers in a List: Write a function that calculates the sum of all even numbers in a given list of integers.

* code 
```js 
function sumEven(numArr){
    let i , sum=0;
    for(i=0;i<numArr.length;i++){
        if(numArr[i]%2==0){
            sum += numArr[i];
        }
    }
    return sum
}
console.log(sumEven([1, 2, 3, 4, 5, 6]));
//output : 12

```

## Calculate the GCD (Greatest Common Divisor) of Two Numbers: Write a function that calculates the GCD of two non-negative integers.
* code
```js
function calcGCD(num1, num2){
    let i , gcd , max = num2>num1? num2: num1;
    for(i=max ;i>0;i--){
        if(num2%i==0 && num1%i==0){
            return i;
        }
    }
}
console.log(calcGCD(48, 18))
//output : 6
```

## Convert Celsius to Fahrenheit: Write a function that converts a temperature from Celsius to Fahrenheit.
* code 
```js
function convertTemp(num){
    return ((num*(9/5)) + 32)
}
console.log(convertTemp(25))
//output: 77
```
