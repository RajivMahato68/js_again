const promisesOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000); 
})

promisesOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promessedThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@example.com"})
    }, 1000)
})

promessedThree.then(function(user){
    console.log(user)
})

const promessedFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"rajiv", password:"123"})
        }else{
            reject('Error: something went wrong')
        }
    }, 1000)
})

promessedFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) =>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("the promises is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('Error: js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response)
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const responses = await fetch('https://jsonplaceholder.typicode.com/users')
        
//     const data = await responses.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/RajivMahato68')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)) 