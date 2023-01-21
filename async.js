//Callbacks, Promises, Thenables, and Async/Await
//Promises
//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject)=> {
    const error = true;
    if(!error) {
        resolve(resolved_funct(1));
    } else {
        reject(rejected_funct(1));
    }
});

console.log(myPromise)

myPromise
.then(value => {
    return value + 1;
})
.then(value =>{
    console.log(value);
})
.catch(err =>{
    console.error(err);
})

function resolved_funct(num){
    return num + 100
}

function rejected_funct(num){
    return num + 1000
}

const users = fetch("http://jsonplaceholder.typicode.com/users");

//pending
console.log(users)

fetch("http://jsonplaceholder.typicode.com/users")
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data)
})

// Async / Await

const myUsers = {
    userList : []
}

const myCoolFunction = async() =>{
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}

const anotherFunction = async() => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList)
}

anotherFunction()