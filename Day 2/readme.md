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
    
    let num = 2 ; 
    //enter your own value 
    console.log(checkPrimeNumber(num));
    ```
