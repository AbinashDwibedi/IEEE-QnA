# Day 2 vssut ieee student branch questions and answers 

## Write a function that checks if a given number is prime. A prime number is a number greater than 1 that has no divisors other than 1 and itself. 
    * code 
    ```js 
    function checkPrimeNumber(num){
        let i , count=0 ;
        for(i = 1 ; i <= num ;i++)        
        {
            if(num%i == 0)
                {
                    count++;
                }
        }
        return count==2? true : false
    }
    
    let testNum = 2 ; 
    //enter your own value 
    console.log(checkPrimeNumber(testNum)); 
    //output : true
```

## Write a function that checks if a given number is a strong number. A strong number is a number that is equal to the sum of factorials of the individual digits.

* code 
            
            
```js
function checkStrongNumber(num){
    let sum=0, temp;
    while(num>0){
        sum += fact(Number.parseInt(num%10));
        num  = Number.parseInt(num / 10);
    }
    return sum == 145 ? true : false
}
function fact(eachNum){
    if(eachNum==0){
        return 1
    }
    return eachNum*fact(eachNum-1);
}

let testNo = 145//test no
console.log(checkStrongNumber(testNo));
//output : true
```

## Write a function that calculates the sum of all digits in a given integer.

* code

```js
function digitSum(num){
    let sum =  0;
    while(num>0){
        sum += (num%10);
        num = Number.parseInt(num/10);
    }
    return sum;
}

let testNo = 12345;
console.log(digitSum(testNo));
//output : 15
```

## Write a function that finds the maximum number in a given list of integers.

* code

```js

function maxNo(numArr){
    let i,maxNo;
    for(i=1;i<numArr.length;i++){
            numArr[i-1]<numArr[i] ? maxNo = numArr[i] : maxNo = numArr[i-1];
    }
    return maxNo
}
let testNum = [1, 7, 3, 9, 2];
console.log(maxNo(testNum));
//output : 9

```

## Write a function that takes a number as input and returns a list of Fibonacci numbers of length equal to that number.  

* code 

```js
function listFibo(num){
    let fiboNumber = [0,1];
    if(num==1){
        return fiboNumber[0]
    }
    else if(num==2){
        return fiboNumber;
    }
    else{
        let i,temp;
        for(i = 2 ; i<num ; i++){
            fiboNumber.push(fiboNumber[i-1] + fiboNumber[i-2]);
        }
        return fiboNumber;
    }
}

let testNo = 5;
console.log(listFibo(testNo));
// output : [ 0, 1, 1, 2, 3 ]
```