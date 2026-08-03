const mySym = Symbol("key1")

const JsUser = {
    name: "Manas",
    "full name": "Manas Rai",
    [mySym]: "myKey1",
    age: 21,
    location: "Noida",
    email:"manas@google.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "manas@google.com"
Object.freeze(JsUser)
JsUser.email = "manas@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");

}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());