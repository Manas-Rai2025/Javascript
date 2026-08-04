function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}
//sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}
 //addTwoNumbers(5,10)

 function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
    
 }
 const result = addTwoNumbers(5,10)
//  console.log("Result :",result);

function loginUserMessage(username="Manas"){
    if(!username){
        console.log("Please enter a valid username");
        return
    }
    return `${username} just loggedIn`
    
}
//console.log(loginUserMessage("manas"));

function calculateCartPrice(val1,val2,...num1){
    return num1

}
// console.log(calculateCartPrice(200,300,400,3000));

const user = {
    username : "Manas",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
handleObject({
    username : "Manas",
    prices : 399
})

const myNewArray =  [200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));