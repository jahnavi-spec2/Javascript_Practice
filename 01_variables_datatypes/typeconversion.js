
let linkName=" xxxxname.com ";
let anotherName=linkName
anotherName="chai aur code";

console.log(linkName);
console.log(anotherName);


let userone={
    email:" abc@gmail.com",
    upi: "user2ybl"
}

let userTwo= userone;
//as these two variables are stored in heap memory ..they references to same variable so if we change the value of one variable it will change the other also..
userTwo.email ="jahnaviprasad2gmail.com";

console.log(userone.email);
console.log(userTwo.email);