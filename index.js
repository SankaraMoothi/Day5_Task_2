// ARROW FUNCTION:odd number:
var total=(numbers)=>{
    let c=[];
    for(let num of numbers){
        if(num%2!==0)
        {
            c.push(num);
        }
    }
    return c;
}
console.log(total([1,20,3,40]));

//ARROW FUNCTION:convert string title caps
var too=(str)=>{
    let upper = true
    let newStr = ""
    for (let i = 0, l = str.length; i < l; i++) {
        
        if (str[i] == " ") {
            upper = true
            newStr += str[i]
            continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
    }
    return newStr
}
console.log(too("mass sankar"));

//ARROW FUNCTION:sum of all number in arrays
var total=(marks)=>{
    let sum=0;
    for(let mark of marks){
        sum=sum+mark;
    }
    
    return sum;
}
console.log(total([10,20,30,40]));

//ARROW FUNCTION: palindrome in array
var arr=(names)=>{
    let result=[];
    for(let i=0;i<names.length;i++){
    var rev=names[i].split("").reverse().join("");
    if(rev===names[i]){
    result.push(rev);
    }
    }
    return (result);
    
 }
 console.log(arr(["appa","amma","malayalam","mama"]));

//ARROW FUNCTION: return all prime numbers
var prime=(num)=>{
    let result=[];
    for (let i = 0; i <num.length; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    console.log(result);
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));