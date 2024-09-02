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