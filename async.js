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

const getAlUserEmails = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user =>{
        return user.email;
    });

    console.log(userEmailArray)
}

const getAlUserNames = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user =>{
        return user.name;
    });

    console.log(userEmailArray)
}

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
    console.log(myUsers.userList);
}

anotherFunction()

getAlUserEmails()
.then(() =>{
    console.log("Get All Emails");
})
getAlUserNames()

console.log(getAlUserEmails())
console.log(getAlUserNames())

//abstraction to function

let header = new Headers()

header.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/async.html')

const getDataFromForm = () =>{
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstname=${requestData.firstName}&lastName=${
        requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url , {
        method : "GET",
        headers : header
    });
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke)
}

const ProcessRequest = async () => {
    const requestData = getDataFromForm();
    const requesturl = buildRequestUrl(requestData);
    await requestJoke(requesturl);
}

ProcessRequest()


