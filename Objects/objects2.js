// const A=new Object();.....method 1 singelton method of creating objects

const A={}// it is also an object..

A.id="123abc"
A.name= "Jahnavi"
A.isLoggedIn =false;

// console.log(A);

const UserB={
    email: "abc@gmsil.com",
    fullname: {//its an object
        userFulname: {  //its again an object
          firstName: "Jahnavi",
          lastName: "Prasad"
    
    }
}

}


console.log(UserB.fullname.userFulname.firstName)
console.log(UserB.fullname.userFulname)// sometime we need to add a ? when we are in doubt ki kya ye variable initialised hai?



// to combine 2 or more objects

const obj1= {1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}
const obj4={obj1,obj2}// it will simply write both separated by curly braces...

const obj3= Object.assign({},obj1,obj2)// it will remove the parenthesis separater , {} is an optional parameter...but is useful and safe to use..


const obj5={...obj1,...obj2}//most used syntax
console.log(obj3);
console.log(obj4);
console.log(obj5);


// syntax used when data is provided from datatbase
const users=[
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 2,
        email: "xyz@gmail.com",
    },

    {
        id: 3,
        email: "abc@gmail.com",
    },

    {
        id: 4,
        email: "def@gmail.com",
    }


]

users[1].email
console.log(A);
console.log(Object.keys(A));// basically wht happens is saare values stored in A ko ek array mei list kr diye and later on we can further use it

console.log(Object.values(A));// sytored variables ka value ka array


console.log(Object.entries(A));//key value pair mei array bna deta
console.log(A.hasOwnProperty('isLoggedIn')); // it asks if a stores any property named isloggedin


// DE STRUCTURING

const course={

    coursename:" Js in Hindi",
price: " 1000",
courseInstructor: "hitesh"

}

course.courseInstructor// sometimes it becomes tedious to call such fnc using dot operator all time so do instead


const{courseInstructor}= course
console.log(courseInstructor)

// can evn give courseInstructor a short name like
const{courseInstructor: a}= course// thsi curly braces is actuallyu causing deStructuring
console.log(a);


// const navBar=() => {

// }
// navBar(company+" hitesh")

//jb bbhi aapko kaam kisi aur pe chodna ho wo api krta HTMLDetailsElement.apply.apply.it is how to write the data extracted from backend


// structure of json where keys are also treated as strings
// {
//    " name": "hitesh",
//    " coursename" : " js in hindi",
//    "price": "free"
// }


// sometimes api are also found in the form of objects
[
    {},{},{}
]

// note ...api uthao kahi kaa usko json mei convert kro and then paste here