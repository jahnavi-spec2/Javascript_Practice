const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task is completed after 1 sec');
        resolve()
// yo resolvefnc .then object ko complete krta hai 
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");// jbtk wo resolve nhi likhte tb tk yee 
})

// promise 2
new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function() {
    console.log("Async 2 resolved")
})

//promise 3
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:" jahnavi", email: "jah "})
    },1000)// toh humne  resolve k ander ka parameter pass kiye hai
})

promiseThree.then(function(user){
    console.log(user); // saare details aa jaegi isme user mei
})

const promisefour= new Promise(function(resolve,reject){
    setTimeout(function() {
        let error= true
        if(!error){
            resolve({username:"jahnavi",password:"123"})

        }else// tells teh reject part the error one
        {
           reject('Error: Something went wrong') 
        }
    },1000)
})

// promisefour.then().catch()// agr .then lagaya toh resolve wrna error aaya to catch kr lunga

promisefour
.then((user)=>{
    console.log(user);
    return user.username// hum cahhte ki username chahiy elike only jahnavi so we return user.username
}).then((username)=>{// to extract username which is returned agai n a var is made named username 
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected "))


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "javascript",password:"123"})
        } else{
            reject('ERROR: Js went wrong')
        }
    },1000)
});
//basically async bhi kuch kuch .thenn ka kaam krta along with await but it is not good at catching errors
async function consumePromiseFive(){
    try {  
    const reponse=await promiseFive
    console.log(response); }
    catch(error){
        console.log(error);
    }
}
  consumePromiseFive()
//  async function getAllUsers() {
//     try{  
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json() //dekgo respons ewe get must be strings so we need to convert
//    console.log(data); }
//    catch(error){
//     console.log("E: ", error);
//    }
    
//  }
//  getAllUsers()
  




 // writing ths same fnc in the .then  and .catch format

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
return response.json()
 })
 .then((data)=> {
    console.log(data);
 })
 .catch((error)=>{
    console.log(error);

 }
)


// note see saar values ye url waala pehle aa rhi console pe ...
// async and task ka code baad mei aaya? why?'
// You don't know the meaning of fetch till now...