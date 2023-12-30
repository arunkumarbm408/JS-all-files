//Funtions
//It is a set of instructions it will get executed whenever it is called or invoked

// 1.Anonymous Function
    //function which does not have function name
    //we cant execute anonymos function  because it does not have function name
    //To execute anonymous function
    //1)named function 2)function with exepression,IIFE


    //Syntax of anonymos function
    //function {

   // }
   //()


   //2.Named function
   //A function which as function name is called as named function
   function demo1()
   {
    console.log("hello this is named function");
   }
  demo1();

  demo1();

  //pssing an argument for the function
  function test(name){
   console.log(name+' ganesha chathurti');
  }
  test("happy");
  test("monday");

  //3.function with expression
  let a18=100;
  let a=function(){
    console.log("this is function with expression");
  }

  a();

  console.log(a());//undefined bcz of log statements

  //2.first class function
  //when we are usig function with expresson we are passing function as value for the expression that value we call it as a first class function


//5.arrow function
//to reduce the syntax we go for arrow function
//()=>(we call it as fat arrow)
let b=(x,y)=>
{
console.log(x+y);
}
b(2,4);

let z=(z1)=>{
    console.log(z1='hey');
}
z();


//first rule
//if there is single statement dont take braces
 let ArrFun=()=>
 console.log('hii');
 ArrFun();

 //second rule
 let ArrFun1=()=>{
  let festivalG='gannu';
  console.log(festivalG);
 };
 ArrFun1();

 //let arun=()=>
    //return "hello"; when we are using return use bracess

let Amg=()=>{
return "bye";
}


 //third rule
 let ArrFun23=()=>{
  let day="monday";
  return day;
 };

//  alert(ArrFun23());
// console.log(ArrFun23);


 //fourth rule
 let ArrFun3=()=>
 {
  let comngDay='wednesday';
  console.log(comngDay);
  let ystday="sunday";
  return comngDay;

 };
 console.log(ArrFun3());//Undefined bcz of two log statements
 //ArrFun3();

 //fifth rule when we are using return keyword use brcess
 //othr wise will get error

 let arrowF=(a,b)=>{
  return a+b;
 }

 console.log(arrowF(2,3));

//6.IIFE
//anonmous
//1.put the function inside the expression called parenthesis
// (function(){
//   console.log('hii');

// })
// ();


//Usea of IIFE
//the varibale declared inside the lIFE wont polute the outside the things
//1.It wont polute the golbal varibale it means the variables declared the inside the IIFE is totaly different from the variables declared outside the IIFE
//2.we use IIFE for data privacy

var ab=20;
(function ae(){
  // let ab=30;
  console.log(ab);
})
();



(function()
{
  console.log("hii");
})
();

(function()
{
  console.log("hello");
})
();

(function()
{
  console.log("bye");

})
();






var vari="your name"
function demo(name,day)
{
  console.log("this is first one " +name + 'is' + day);
}

demo(vari,21);


var vari="my name"
function demo1(name,day)
{
  console.log("this is second one " +name + 'is' + day);
}
demo1(vari,21);






////
let name1=123;
function demo23(wish,grid)
{
  console.log('1st IIFE hello'+wish+grid);

}

demo23('GM', name1)



let name12='abc';
function demo23(wish,grid)
{
  console.log('2nd IIFE hello'+wish+grid);


}

demo23('GM',name12)





let name123='abc';
(function demo23(wish,grid)
{
  console.log('1st IIFE hello'+wish+grid);


})

('GM',name123);



let name1234='abc';
(function demo23(wish,grid)
{
  console.log('2nd IIFE hello'+wish+grid);


})

('GM', name1234);


//sumne madiradu
let a1=2;
function c(p,q)
{
  console.log("areey"+p+q);
}
c("nod", a1);


let a12=2;
function c(p,q)
{
  console.log("nodu illi"+p+q);
}
c("nod", a12);


//sir madisiradu
(function(){


  let a1=2;
  function c(p,q)
  {
    console.log("areey"+p+q);
  }
  c("nod", a1);


})
();


(function (){



  let a12=2;
function c(p,q)
{
  console.log("nodu illi"+p+q);
}
c("nod", a12);

})
();

//Nested Function
// the function using inside the another function
// we achive closure and lexicle scope in nested function
//FEC=>function execution context


//Closure-It allows to access the outer function scope from the inner function scope

//Lexical Scope- the ability of javascript engine to search for that variable in the outer scope which is not present in the current scope..

function gp(){
               //let a=100;
               let b=200;
                         function p(){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     let d=300;
                                      console.log(a);
                            
                                                     function c(){
                                                               
                                                                  console.log(b);
                                                                   console.log(d);
                                                                  

                                                                  }
                                                                  c()
                                       }
                                       p()
              }
              gp();


  //create 4 closure
  function grand(){
       let p=200;
       let q=300;
       let r=500;
       let s=800;
                 function pt(){
                            console.log(p);
                            console.log(q);
                             function child8(){
                              console.log(r);
                              console.log(s);

                             }
                             child8();
                 }
                 pt();

  }
  grand();

  //this keyword value change accordingly where we are using the this keyword
  console.log(this);//window
  console.log(window);//window

  console.log(this===window);//true
  console.log(25==="25");

  function aa(){
    console.log(this);//window
  }
  aa();

  //when your are using this keyword inside the normal function of object it is pointing to the object
  let obj={
    id:100,
    guest:function(){
      console.log(this.id);//100
    }

  }
console.log(obj);
  obj.guest();


  //when your using this keyword inside the arrow function of object will get undefined 
  //bcz this keyword does not works in arrow function

let obj1={
  id:200,
  guest:()=>{
    console.log(this.id);
    let st=500;
  }
}
obj1.guest();


//call back function
//sir madsiradu
function callback()
{
console.log("might bee");

}

function demo5(){
  
 console.log("this is venkat home");
 //a();
}
demo5(callback)







///arun madiradu
//nested function cant be callbck

//var api=200;
function api(){
  console.log('hello boss');
}

function hof(ab,b){  //higher order function
  console.log(b+"hi boss");
  ab()
}
hof(api,"arun");



//
let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;

let calculator=(p1,p2,test)=>{
  return test(p1,p2);
}
console.log(calculator(10,20,add));
console.log(calculator(100,20,sub));


//
let kumar=(p1,p2)=>{
  return (p1+p2);
}

console.log(kumar(2,3));

var kum=200;
function kum(){
  console.log("baduku");
}
function mrf(x){
  // x()
  console.log("bye");
  
}
mrf(kum);




//10.Generator function

function demo2020(){
  return "hello"
}
 let d=demo2020();
 console.log(d);

//  the use of generator function
// to make efficient to iterarate the values to make asynchronous

// thr syntax of generator function
function test(){
  console.log("this is normal function");
}
test();

// generator function is a function which returns  an generator object that is stored in one variable 
// identify generator function by using  

// function* generatorFun(){
//   console.log("this is generator function");
// }
// let generator=generatorFun();
//  console.log(generator);

//example
function* generatorFun(){
  yield 325; //yield is keyword which holds the generator value
  yield "32"
  yield "hi"
  yield 256;
   let ammu='haanku' //we cant use 
   return ammu
  return "haan"
  yield "helo"//value will be undefined
}

let generator=generatorFun();
console.log(generator.next());
 console.log(generator);

console.log(generator.next());
 console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log(generator.next());
console.log(generator.next());
// console.log(generator);



//generator function ill produce new keyword that is yield, yield keyword will hold the values of generator function
// the yield values gets executed when the next function calls.the number of yield= the number of next function calls
// generator function returns two properties value and done
// the value property will hold the yield value 
// the done property will tells that generator function status if the done is false means=>the generator function wil not get
// over.....If the done it true means=> the genartor function is over.....
// the return keyword tells that the genertaor function will get over after that if any statements are there all repersents
// done values has true... 


// print values of genetaror by using for loop
// for(let name of generator)
// {
//   console.log(name);
// }

function* demo8(){
  yield 10;
  yield 'hi';
}

let test8= demo();
//console.log(test.next());
console.log(test.next());

function* cat(){
  yield 20;
  yield *demo8();
}

let p=cat();
console.log(p.next());
console.log(p.next());
























