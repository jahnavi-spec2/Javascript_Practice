   let a=10
  const b=20
   var c=30  
   //tino variable kaam kr rhe to why need var and let?
// //   // here comes the scope
 if(true) {
     let a=10
  const b=20
  var c=30// now when u will try to access these const outside this for scope...it should not be accessibel...but heree comes the issue

  }

// //     console.log(c)
// //     //   console.log(b)
// //     //     console.log(a)// ye error show karega since const and let follows the scope


// //     // the code outside the if block is global scope and tht inside the for loop is called block scope


// //     function one(){
// //         const username= "jahnavi"

// //         function two(){
// //             const website ="youtube"
// //             console.log(username)// want to check if this nested fnc can access its parent acces from here
// //         }
// //         // console.log(website);// it will show error...kyuki bade log chote ka acces nhi kr skte...

// //         two()// fnc call
// //     }
// //     one()


// // another example of new fnc neste fnc inside if block
// // if(true) {
// //     const username= " Pooja"
// //     if(username=== "Pooja"){
// //         const website= "Youtube" 
// //     }
// //       //  console.log(website);....these will give errors
// //     }

// //     //console.log(username);...these will give errors

// //     function addone(num){
// //       return num+1
// //     }
// //     addone(5)// only the value 5+ 1 is returned...and no error even if this is called before declaring

// //     const addTwo= function(num){// the diff bw these two is these addTwo is taken as an expression but yess it is a fnc 
// //       return num+2
// //     }
// //     addTwo(5)//if u will call it before declaring there will be error... THE DIFFERENCE BW ADDTWO AND ADDONE




// //     // THE THIS KEYWORD******************************
// //     //see from notes
// //     //Immediately Invoked Function Expressions

// //     function chai2() {
// //       console.log("B CONNECTED");
// //     }
// //     chai2();// isse execute to ho jaata hai immediately but some global pollution might be there...so we use IIFE

// //     //**** Iife **

// //     (function chai3() {
// //       console.log("AB CONNECTED");
// //     }) ();

// //     ( (name)=>{
// //       console.log('DB CONNected two ${name}');// ek baar dekhna hamara dollar sign chlta kyu nhi
// //     }) ("Jahanvi")



// // const abc="jahnavi"// contains truthy or falsy values
// // if(abc){// it will give true output without any boolean remark..
  
// // }


// //     // note if else and switch, ternary operator ka notes nhibnai../.sab same hi haii
// //     // aslo values which gives false whenever inside a boolean 
// //     // FALSE,0 ,-0, BIGINT, " ",null, undefined,NaN
// //     // truthey values are..... "0", 'false'," ",[],{}, functions(){}

// //     //what if objects are empty how to know it.....as u knowna ki sow to calc the length of a string
// //     const emptybj= {}
// //     if(Object.keys(emptyObj).length===0){
// //       console.log("Object is empty");

// //     }

// //     let a;
// //     a=5?? 10// return 5 on console log
// //     a=null ?? 10// this symbol is used as safety check...to prevent returning null value...generally instead of 10 we use complex statement
// //     a= undefined?? 15// returns 15/...this ?? is used for null and undefined

// //     a=null?? 5?? 10// will return 5 ....generally its used to prevent fallback
// //     console.log(a);


//     for(let i=1;i<=20; i++){
      
//       if(i==5){
//         console.log('Detected 5')
//           break;// may us econtinue
//       }
//         console.log('Value of i is ${i}');
//       }
    

//       // advanced for loops
//       // for of
//       // an array acn evn take input as objects [{},{},{}]
//       const arr =[1,2,3,4,5]
 
//       for(const i of arr)// object can be string ,arrays ,maps
//       {
//      console.log(i);
//       }
//    const greetings =" Hello World";
//       for(const greet of greetings){
//         console.log('each char is ${greet}')
//       }

//       // Maps

//       const map= new Map() 
//       map.set('IN', "India")
//       map.set('USA', " United States of America")
//       map.set('Fr'," France")

//       // console.log(map);

// map is not iterable using for in...


//     for(const [key,value] of map){// square brackket se hum differentiate kr paa rhe 
//       console.log(key , '-', value);
//     }

//     const myObject = {
//       'game1': 'NFS',
//       'game2': 'SpiderMan'
//     }


//     for(const [key,value] of myObject)
//         console.log(key , '-', value);// we will see error and find this way myObject is not iterable 

// const myObject2 ={
//   js: 'javascript',
//   cpp: 'C++', 
//   rb: 'ruby',
//   swift : " swift by apple"
// }

// for(const key in myObject2){
//   console.log(key);
//   console.log(myObject2[key]);
// }

const ab=[  "js"," rb","py","java","cpp"]

// for(const key in ab){
//   console.log(ab[key]);
// }

// ab.forEach(  function (item) {
// console.log(item);

// })//basically its a callback function so wht u in general do is give a name to a fnv and here avoid using it
// // this item  will repeat each value inside the st ring and can be any nam rep each iterating element

// //method 2 for writing the above callback fnction
// ab.forEach( (item)=> {
//   console.log(item);// it also accepts index and array along with item
// })

// mathod 3
function printMe(item){
  console.log(item);
}
ab.forEach(printMe);

// OBJECT ROLE
const myCoding =[// mycoding array h aur baaki  { }is obj
  {
    languageName :"javascript",
    langFile: "js"
  },
  {
    languageName :"java",
    langFile:"java"
    
  },

  {
    languageName :"python",
    langFile:"py"

  },
]

myCoding.forEach((item)=> {
  console.log(item.languageName);// this forEach function doesn't return any value...whethr u assign this whole fnc to a variable and print them..
})

const nums= [1,2,3,4,5,6.7,8,10]

const myNums= nums.filter((item)=> item> 4)// so we use filter which continues giving a condn
console.log(myNums);

const myNums2= nums.filter((item)=> {
  return item> 4})// agr extra curly braces lagaee too soch lo...scope bn gya soo u need to use "return"


  //METHOD NEW n replace of filter
  const newNums = []
  nums.forEach( (num)=> {
    if(item> 4 ){
      newNums.push(item)
    }
  })
  console.log(newNums);
  

  // MORE USE OF FILTER
//...see urself book example

const myNumbers =[1,2,3,4,5,6,7,8,9,10]

const newNames = myNumbers.map( (num)=> {
  return num+10
})
  console.log(newNums);

  const myTotal =myNums.reduce( function(acc,currval) {
    console.log('acc: ${acc} and currval : ${currval}');
  },0)  // this o actaully gives a cinitial value to acc variable...so basically

  const myToatal =myNums.reduce( (acc,curr)=> acc+ curr, 0)

  console.log(myTotal);

  const shoppingCart= [
{
  itemName : "js course",
  price: 2999
}, 
{
  itemName :"Java",
  price : 4000
},

{
  itemName :"Flutter",
  price : 4000
},
{
  itemName :"DAta SCIENCE",
  price : 14000
}

  ]
  
 const priceAdded= shoppingCart.reduce ((acc,item) => acc + item.price,0)
 console.log(priceAdded);