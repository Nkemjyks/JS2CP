// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
function revStr(str){
    
    let strArr = str.split("");
    let sArr = [];

let n = strArr.length;
for(var i in strArr){    
    sArr[i]= strArr[n-1-i];      
}
let strR ="";
for(var i in sArr){
    strR += sArr[i] ;
}

return strR

}

console.log( revStr("mine"));
// Count Characters: Create a function that counts the number of characters in a string.
function cntChar(s){
    return s.length;
}
console.log(cntChar("happy"));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function cfW(a) {
    let f = a.shift().toString().toUpperCase();
    
    a.unshift(f);
    return a;
}
function revAS(a){
    let s = "";
    for(var i in a){
        s += a[i];
    }
    return s;
}

function capW(s){
    let wArr = s.split(" ");
    let sn="";
    for(var i in wArr){
        let x =wArr[i].toString().split("");
        let y = revAS(cfW(x));
        sn += y + " ";
    }
    console.log(sn)
    return sn
}
capW("the quick brown fox")





// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let Arr = [1,3,5,66,7,88,24]

function getMax(A){
    let max=A[0];
    for( var i in A){
        if(A[i]>max){
            max = A[i];
        }
    }
    return max;
}
console.log(getMax(Arr));

function getMin(A){
    let min =A[0];
    for( var i in A){
        if(A[i]<min){
            min = A[i];
        }
    }
    return min;
}
console.log(getMin(Arr));

// Sum of Array: Create a function that calculates the sum of all elements in an array.



function getSum(A){
    let sum = 0;

    for( var i in A){
        sum += A[i] ;
    }
    return sum;
}
console.log(getSum(Arr));


// Filter Array: Implement a function that filters out elements from an array based on a given condition.

let Arrs = [1,'nk', 'pt', 3,5, 'hl', 66, 7, 'tk' ,'yf', 88, 24]

function filtNum(A){
    let numArr=[];
    for( var i in A){
        if(typeof A[i] == typeof 3){
            numArr.push(A[i]);
        }
    }
    return numArr;
}
console.log(filtNum(Arrs));

function filtStr(A){
    let strArr=[];
    for( var i in A){
        if(typeof A[i] === typeof "3"){
            strArr.push(A[i]);
        }
    }
    return strArr;
}
console.log(filtStr(Arrs));

// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function fac(n){
    let p =n;
    while (n>1){
        p *= n-1;
        n--;
    }
    return p;
}
console.log(fac(4));

// Prime Number Check: Create a function to check if a number is prime or not.

function chPrime (n){
    if (n<0){
        return "not a prime number";
    }
    else{
        let d = n;
        while (d>2){
            if(n%(d-1)==0){
                return "not a prime number";
            }
            d--;           
        }
        return "it is a prime number";
    }
    
    
}

console.log(chPrime(7));
console.log(chPrime(12));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fib(n){
    let fibRay = [];
    if (n==1){
        fibRay.push(0);
        return fibRay;
    }
    if (n==2){
        fibRay.push(0);
        fibRay.push(1);
        return fibRay;
    }
    if (n>2){
        fibRay.push(0);
        fibRay.push(1);
        let i = 2;

        while(i<n){
            fibRay.push(fibRay[i-1] + fibRay[i-2]);
            i++;
        }
        
        
        return fibRay;
    }
    
    
}

console.log(fib(20));


