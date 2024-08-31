# What is the difference between em and rem units in CSS?

* em - When we give a fix font size like px to any parent element like div,h1 etc then if we give their child element and also their child element value in "em" then we can change all the elements value by just changing the parent element font size we can change the whole inside element size with respect to the parent element font size .

* rem - On the other hand rem corresponds to the size of the html document font size. That means if we give any element value in rem than by changing the value of html document font size we can increase or decrease the element size.

# Explain the concept of closures in javascript . Provide an example where a closure might bbe useful (with code) ?
* A inner function that has the access to the outer function 
- code 
   ```js 
       function outer(){
            let name = "Abinash";
            function inner(){
                console.log(name);
            }
        return inner
    }
    let outerfunction = outer();
    outerfunction();
    //inside the outerfunction i will get the return value of outer function which is inner function when i run that function present inside the outerfunction variable i will get the console.log of the variable which is not defined inside the inner function but still i can access it even after not calling outer function it's called closures.
    ```

# What are semantic HTML tags?
* These are the tags which defines purpose by their tag name which is used so that machine and human can understand why it is used here overall it describes the meaning . These tags are used to make SEO friendly websites .

# How would you create a responsive design without using a css framework like bootstrap?
* By using media queries inbuilt in CSS. 
-code 
    ```html
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            height: 100vh;
            width: 100%;
            background-image: linear-gradient(to left , cyan ,lime);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container{
            height: 200px;
            width: 500px;
            background-color: black;
        }
        @media  screen and (max-width : 500px) {
            .container{
                width: 200px;
            }
        }
    </style>
    <title>Responsive design</title>
    </head>
    <body>
        <div class="container">
    
        </div>
    </body>
    </html>
```

# What is the purpose of the srcset attribute in the <img> tag?
* srcset is used to set different images with respect to a condition like width , height etc
