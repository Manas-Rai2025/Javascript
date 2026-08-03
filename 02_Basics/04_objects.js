// const tinderUser = new Object() it is a singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Manas"
tinderUser.IsloggedIn = false

const regularUser = {
    email: "Manas@google.com",
    fullname:{
        userFullname:{
            firstname:"Manas",
            lastname:"Rai"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// spread operator is used to copy the properties of one object to another object
console.log(obj3);

const users = [
    {
        id: 1,
        email:"M@google.com"

    }, {
        id: 1,
        email:"M@google.com"

    }, {
        id: 1,
        email:"M@google.com"

    }, {
        id: 1,
        email:"M@google.com"

    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
