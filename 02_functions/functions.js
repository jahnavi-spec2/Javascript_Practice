// function add(n1,n2){
//     let result= n1+ n2
//     return result// return allows the result item to be accesed outside in the fnc call 
// }

// const result= add(3,5)
// console.log("Result:", result)// here it imp to console lo the return part else answer wont be printed


// function loginUserMessage(username){

// we sometimes even ee if theinput is valid or not.....if(username== undefined) {    consoel.log("") return}
// or may also write as username!
//     return '${username} just logged in'
// }

// console.log(loginUserMessage("Jahnavi"))
//it wont display thimgsince u havent uk printed it
//if u dont give it any parameters it will return UNDEFINEd


// this fnc is generally used when we are trying to make any shopping or E-commerce website
function calculateCartPrice(...num1){ // rest operator..jitna bhi use krlo num /items add and array bna dega sbka
    return num1
}
console.log(calculateCartPrice(200,300,400))
    //... ab dekho yaha prices args badhti ya kam hoti rahegi kyuki add to cart user pe depend kr rha


    // creating objects an seeing how to use it in functions
    const user={
        username: " jahnavi",
        price: "price less"

    }
    function handleObject(anyobject){
        console.log('Username is ${anyobject.username} and price is ${anyobject.price}'); 
    }
    handleObject(user)

    handleObject({
        username: "sam",
        price: 399
    })

    const myNewarray=[200,400,500,433]
    function returnSecondValue(getArray){
        return getarray[1]
    }

    console.log(returnSecondValue(myNewarray));
    console.log(returnSecondValue([200,400,500,10000]));
    