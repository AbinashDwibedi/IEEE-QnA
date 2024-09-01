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
