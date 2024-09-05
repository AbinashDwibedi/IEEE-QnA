//This is for testing programs !

// ## Write a function that finds the maximum number in a given list of integers.(misunderstood)

// function findMax(numArr){
//     let i, j,maxCountNumber = [0,0],count;
//     for(i=0;i<numArr.length;i++){
//         count=0
//         for(j=0;j<numArr.length;j++){
//             if(numArr[i]==numArr[j]){
//                 count++
//             }
//         }
//         if(maxCountNumber[0]<count){
//             maxCountNumber[0] = count
//             maxCountNumber[1] = numArr[i];
//         }
//     }
//     return maxCountNumber;

// }
// let testArr = [1,24,23,24,34,2,2,22,2,25,24,24 ,24,2 , 2, 11,24, 235, 24, 3,2,1,8];
// //input numbers for the test
// let resultArr  = findMax(testArr);
// console.log("Count: "+resultArr[0]+" Number: "+resultArr[1]);
// //output : Count:7 Number: 24

// function digitSum(num){
//     let sum =  0;
//     while(num>0){
//         sum += (num%10);
//         num = Number.parseInt(num/10);
//     }
//     return sum;
// }

// let testNo = 12345;
// console.log(digitSum(testNo));

// function checkPerfect(num){
//     let i, sum=0;
//     for(i=1;i<num;i++){
//         if(num%i==0){
//             sum+=i

//         }
//     }
//     return sum==num
// }
// console.log(checkPerfect(28))

// function checkPalindrome(num){
//     let newNum=0, realNum =num;
//     while(num>0){
//         newNum = newNum*10 + num%10;
//         num = Number.parseInt(num/10);
//     }
//     return newNum==realNum ? true : false;
// }
// console.log(checkPalindrome(121));
// //output : true


// function countVowels(str){
//     let count=0 , i;
//     for(i=0 ;i<str.length;i++){
//         switch(str[i]){
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//             case "A":
//             case "E":
//             case "I":
//             case "O":
//             case "U":
//                 count++
//         }
//     }
//     return count
// }
// console.log(countVowels(`Hello, World!`))
// //output : 3


// function reverseInt(numArr){
//     let i,newArr=[];
//     for(i=numArr.length-1;i>=0;i--){
//         newArr.push(numArr[i])
//     }
//     return newArr;
// }
// console.log(reverseInt([1, 2, 3, 4, 5]));
// //output : [ 5, 4, 3, 2, 1 ]

// function calcFact(num){
//     if(num==0){
//         return 1;
//     }
//     return num*calcFact(num-1);
// }
// console.log(calcFact(5));
// //output: 120

// function checkArmstrong(num){
//     let realNum = num ,sum=0,count=0;
//     while(num>0){
//         count++;
//         num = Number.parseInt(num/10);
//     }
//     num = realNum;
//     while(num>0){
//         sum = sum + Math.pow((num%10),count);
//         num = Number.parseInt(num/10);
//     }
//     return realNum==sum ? true : false
// }
// console.log(checkArmstrong(153));
// //output : true


// function checkAnagram(str1 , str2){
//     if(str1.length != str2.length){
//         return false
//     }
    
//     else{
//         return str1.split("").every(char => str2.includes(char))
//     }
// }

// console.log(checkAnagram("listen", "silent"));
// //output : true

// function sumEven(numArr){
//     let i , sum=0;
//     for(i=0;i<numArr.length;i++){
//         if(numArr[i]%2==0){
//             sum += numArr[i];
//         }
//     }
//     return sum
// }
// console.log(sumEven([1, 2, 3, 4, 5, 6]));
// //output : 12

// const sumEven = (numArr)=> numArr.reduce((ac , number)=> {
//     if(number%2==0){
//         return ac+number;
//     }
//     else{
//         return ac;
//     }
// },0)
// console.log(sumEven([1, 2, 3, 4, 5, 6]));


// function calcGCD(num1, num2){
//     let i , gcd , max = num2>num1? num2: num1;
//     for(i=max ;i>0;i--){
//         if(num2%i==0 && num1%i==0){
//             return i;
//         }
//     }
// }
// console.log(calcGCD(48, 18))
// //output : 6

// function convertTemp(num){
//     return ((num*(9/5)) + 32)
// }
// console.log(convertTemp(25))
// //output: 77

// function longStr(str){
//     let i , j , newStr = [];
//     for(i=0;i<str.length ;i++){
//         if(!newStr.includes(str[i])){
//             newStr.push(str[i])
//         }
//         else{
//             break;
//         }
//     }
//     return newStr.join("");
// }

// function isIncluded(newstr , character){
//     for(let i = 0 ;i< newstr.length ; i++){
//         if(newstr[i] == character){
//             return true
//         }
//     }
//     return false
// }

// console.log(longStr("workattech"));


// function longStr(str){
//     let i , j , newStr = [];
//     for(i=0;i<str.length ;i++){
//         if(!isIncluded(newStr , str[i])){
//             newStr.push(str[i])
//         }
//         else{
//             break;
//         }
//     }
//     return newStr.join("");
// }

// function isIncluded(newstr , character){
//     for(let i = 0 ;i< newstr.length ; i++){
//         if(newstr[i] == character){
//             return true
//         }
//     }
//     return false
// }

// console.log(longStr("workattech"));

// function checkWays(num){
//     let arr= [0,1] , value;
//     while(num>0){
//         value = arr[0]+arr[1];
//         arr[0] = arr[1];
//         arr[1] = value
//         num--
//     }
//     return value;
// }

// console.log(checkWays(4))
// //output : 5

// function checkLPrime(L, R) {
//     let primeNumbersArray = primeNumbers(L,R);
//     if(primeNumbers.length ==0){
//         return -1
//     }
//     let IndividualNumArray = [], countArr = [0,0], max;
//     primeNumbersArray.forEach((number)=>{
//         IndividualNumArray = IndividualNumArray.concat(breakNum(number));
//     })
//     IndividualNumArray.sort((a,b)=> a-b)
    
//     for(let i = IndividualNumArray[IndividualNumArray.length-1] ;i>0;i--){
//         countArr[0] = 0;
//         for(let j = 1; j<IndividualNumArray.length;j++){
//             if(i==IndividualNumArray[j]){
//                 countArr[0]++;
//             }
//         }
//         if(countArr[0]>countArr[1]){
//             countArr[1] = countArr[0]
//             max = i
//         }
//     }
//     return max;
// }
// function breakNum(num){
//     let brokenNum = [];
//     while(num>0){
//         brokenNum.push(num%10);
//         num = Number.parseInt(num/10);
//     }
//     return brokenNum
// }
// function primeNumbers(L,R){
//     let i,j,count,numArr = [] ;
//     for(i=L;i<=R ;i++){
//         count = 0 ;
//         for(j=1;j<=i;j++){
//             if(i%j==0){
//                 count++
//             }
//         }
//         if(count ==2){
//             numArr.push(i)
//         }
//     }
//     return numArr
// }
// console.log(checkLPrime(2,20));
// //output : 1




