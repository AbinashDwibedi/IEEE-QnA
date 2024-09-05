# Day 5 questions and answers 

## Given a string s, find the length of the longest substring without repeating characters.
* code 
```js
function longStr(str){
    let i , j , newStr = [];
    for(i=0;i<str.length ;i++){
        if(!isIncluded(newStr , str[i])){
            newStr.push(str[i])
        }
        else{
            break;
        }
    }
    return newStr.join("");
}

function isIncluded(newstr , character){
    for(let i = 0 ;i< newstr.length ; i++){
        if(newstr[i] == character){
            return true
        }
    }
    return false
}

console.log(longStr("workattech"));
//output : workat
```

## There is a staircase with n steps. You need to reach the top and you can either climb 1 step or 2 steps at a time.

* code
```js

function checkWays(num){
    let arr= [0,1] , value;
    while(num>0){
        value = arr[0]+arr[1];
        arr[0] = arr[1];
        arr[1] = value
        num--
    }
    return value;
}

console.log(checkWays(4))
//output : 5

```

## 3. Given a range L to R, the task is to find the highest occurring digit in prime numbers which lie between L and R (both inclusive). If multiple digits have same highest frequency return the largest of them. If no prime number occurs between L and R, return -1.

* code

```js 
function checkLPrime(L, R) {
    let primeNumbersArray = primeNumbers(L,R);
    if(primeNumbers.length ==0){
        return -1
    }
    let IndividualNumArray = [], countArr = [0,0], max;
    primeNumbersArray.forEach((number)=>{
        IndividualNumArray = IndividualNumArray.concat(breakNum(number));
    })
    IndividualNumArray.sort((a,b)=> a-b)
    
    for(let i = IndividualNumArray[IndividualNumArray.length-1] ;i>0;i--){
        countArr[0] = 0;
        for(let j = 1; j<IndividualNumArray.length;j++){
            if(i==IndividualNumArray[j]){
                countArr[0]++;
            }
        }
        if(countArr[0]>countArr[1]){
            countArr[1] = countArr[0]
            max = i
        }
    }
    return max;
}
function breakNum(num){
    let brokenNum = [];
    while(num>0){
        brokenNum.push(num%10);
        num = Number.parseInt(num/10);
    }
    return brokenNum
}
function primeNumbers(L,R){
    let i,j,count,numArr = [] ;
    for(i=L;i<=R ;i++){
        count = 0 ;
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count ==2){
            numArr.push(i)
        }
    }
    return numArr
}
console.log(checkLPrime(2,20));
//output : 1

```