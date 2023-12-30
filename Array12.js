//Javascript is an homegeneous and heterogeneous type of data
let myArray = [1,"string",true, false, function a() {},{},null,undefined,100n]
console.log(myArray);

//let you[]={ 1,2,3}; it is not possible




let array=[];
let b={};
console.log(array);
console.log(typeof array);



// how to check the array
console.log(Array.isArray(array));//true
console.log(Array.isArray(b));

console.log(array instanceof Array);//true
console.log(b instanceof Array);//false

//how to add vlues to an array
array[0]=100;
array[48]=true;
array[100]="thursday";
console.log(array);


let boost=[100,200,300]
console.log(boost[2]=400);
//how to check length of an array
console.log(boost.length);
console.log(boost[4]=500);
console.log(boost);

//how to fetch an array value
console.log(boost[2]);
console.log(boost.length);


//how to update an existing array value
console.log(boost[3]="four hundred");
console.log(boost);


//how to delete 
delete boost[0]
console.log(boost);


//Array Methods
// 1.push
// 2.unshift
// 3.pop 
// 4.shift 
// 5.slice 
// 6.spilce
// 7.reverse
// 8.concat
// 9.sort
// 10.indexOf


//vvvvvvvvvimp
//map
// filter
// reduce

let myPet=["gandhi","waste","fellow"]
console.log(myPet);

//push=>>>>>to add value from beyond an existing aarray 
pushArray=myPet.push("definitely")
console.log(pushArray);
console.log(myPet);
//pushing the values effects to the original length





//2.unshift
//unshift adding the values from starting of array
//unshift effects the original length of an array
let unshift=myPet.unshift(1,2);
console.log(unshift)
console.log(myPet);




//3.pop
//pop method removes an values from end of an array
//pop doesnt accepts any arguments
//it effects to the original length of an array
let popAry=myPet.pop()
console.log(popAry)
console.log(myPet);


//4.shift
// shift method will remove the value from the starting of an array
//shift methid does not accepts any arguments
//shift effects the original length of an array

let shiftAry=myPet.shift();
console.log(shiftAry);
console.log(myPet);


//5.Slice
//slice is used to extract an piece of an value from existing array
//it accepts one argument or two arguments(includes firstone,excludes second one)
//it doesnt effects to the originl length of an array
//it creates an shallow copy from an array 
//minus value in an argument indicates that vlues from the end   slice(-1,-2)
let sliceAry=myPet.slice(1,2)
let sliceAry1=myPet.slice(-1,-2)
console.log(sliceAry1);
console.log(sliceAry);
console.log(myPet);



let shallowCopy=myPet.slice();
console.log(myPet);
console.log(shallowCopy);



//6.splice
//it is used to extract the piece of an value in that place we can add values
//It accepts one or two aruments that is (1st one includes,2nd one excludes) or three agruments(first one 
//index,second how many values want to remove from that index,third element to add from the removes element index)
// it effects the original length of an array
// 

let spilceAry=myPet.splice(0,2,"hello","paa","hii");
console.log(spilceAry);
console.log(myPet);


let array11=[1,2,3,4,5];
console.log(array11);

// let spilce=array11.splice(0,3);//when it is 0 in the firsts argument it excludes last argument
// let spilce1=array11.spilce(1,4);//when it is greater than 0 in the first argument it includes last argument
// console.log(spilce1);
// console.log(spilce);
// console.log(array11);


//if spilce has three arguments 1st one indicates index,2nd one how many elements wants to be remove from the array
//3rd from that removed element index how many elements want to add
// we can add many elements from that removed elements
let naane=array11.splice(1,3,2,4,6,8);
console.log(naane);
console.log(array11);


//find
let array12=[10,20,30,40,50,80];


//find method in java script returns the first array element which satisfies 
//find is hof
let findA=array12.find(function(ele)
{
   return ele >50 && ele <100;
});
console.log(findA);


//findindex
//findindex is an js will return the index of an array element which statisfies the condtion 
let findindex1= array12.findIndex(function(index){

    return index <30;
}

);

console.log(findindex1);

//flat
//it will not affect length of original
//flat in js will return nested array into an single array
let nest=[100,[200,[990],[550,125],70]];
let flat=nest.flat(10);
console.log(flat);


//concat
//
let str9=["hi","bro"]
let concatA=array11.concat(array12,nest,str9);
console.log(concatA.flat(10));


//join
let result=['js','is','beautiful','language'];
let join=result.join(" ");//if we want in strig we can ad in the this 
console.log(join);
//console.log(join.reverse());  not possible 
console.log(typeof(join));


//reverseee
let rev=[30,50,150];
let str1=['aa','cc']
let result1=rev.reverse();
console.log(result1);



//sort
let ss=['cbc','bca','abc'];
let  numbers=[10,20,50,60,701,101,115];
//let mt=numbers.sort(function (cur,next){
//     if(cur < next);
//     {
//     // return -1;
//     // else
    
//     //     return 1;
//     // }

// });

//return -1 =>dont swap
//return 1=> swap
//asss
let sort8= numbers.sort(function(x,y){
    if(x<y){
        return -1;
    } else {
        return 1;
    }
}
);
console.log(sort8);
//dsss
let sort7= numbers.sort(function(x,y){
    if(x>y){
        return -1;
    } else {
        return 1;
    }
}
);
console.log(sort7);
//console.log(mt);
let sort=ss.sort();
console.log(sort);


let sort9=numbers.sort((x,y)=>x-y);
console.log(sort9);

let sort10=numbers.sort((x,y)=>y-x);
console.log(sort10);

//indexOf
//to find the index value of an element
let manu=[1,2,3,4,5];
let indexofA=manu.indexOf(7);//-1
console.log(indexofA);

//some
//some method in js will return true when some elements of an array will satisfies the given condition
let number=[330,220,550,60];
let some=number.some(function(ele) {
   return ele>500; 
})
console.log(some);

//every
//every method in js will return true when every element of an array will satisfies the condition
let every=number.every(function(ele){
    return ele>500;
})
console.log(every);



//map, fliter, reduce vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvimp
//for interview point of youuuuuuuuuuuu
//data transformation method
//map
//It is a data transformation method it is used to loop over an each and indiviual array to new array with transformed data
let birthYear=[1999,2000,2001,2002,2003];
let map=birthYear.map(function(ele){
    return 2023-ele;
})
console.log(map);

//BY LOOP
let age7=[]
for(let values of birthYear){
    let ages =2023-values;
    age7.push(ages);
}
console.log(age7);

//for in index values 
//for of=> values
for(let values in  birthYear)
{
    console.log(values);
}

let age=[];
for(let values of birthYear){
    let ages =2023-values;
    age.push(ages);
}
console.log(age);

//filter
//filter methods in js filter the each array element with a given condition
let transaction=[2000,-110,-40000,1000]
let deposit= transaction.filter(function(ele){
    return ele>0;
})
console.log(deposit);

let withDraw=transaction.filter(function(ele){
    return ele<0;
})
console.log(withDraw);


let w=transaction.filter(()=>{

})

//reduce
//reduce method in js reduce or boils the given array elements into an single value
//the result value stored in accumulator
let numb=[1,2,3,4,5];
let reduce=numb.reduce(function(acc,ele){
    return acc+ele;
},0);
console.log(reduce);



// let numt=[1,2,3,4,5];
// for(let values of numt ){
//     
// }
// console.log(values);

//destructuring of an array //imppppp
let newArray=[15,25,35,45];
name1=newArray[0];
name2=newArray[1];
name3=newArray[2];
name4=newArray[3];
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

//destructruing
//unpacking all the array elements and stored in dif dif variables
//nange enadru array elements alli 1,2,3,4,5 ittu andre nange 1,3,4,5 bek andre adu upayoga agutte
let newArray1=[15,25,35,45];
let [a,b1,c,d,e]=newArray1;
console.log(a,c);//only 15 35 will get
console.log(a,b1,c,d,e);

let details=["john","fransisc",34,"male"];
let[firstname, ,age1,gender="feee"]=details;
console.log(firstname);
//console.log(lastname);
console.log(age1);
console.log(gender);


//by using function
function topResult(){
    return ["suresh","ramesh","nandini","narmada","kamlesh"];

}
let [result5,result18,result2]= topResult();
console.log(result5);

console.log(result18);
console.log(result2);





console.log(name1);




//spread operator(...)
//spread operator in js extract all the aarray elements and displayed individually
let spread=[300,400,500,600,700,800];
let fSpread=[spread[0], spread[1], spread[2], spread[3],spread[4],spread[5]];
console.log(fSpread);

console.log(...spread);

let str10="hello";
console.log(...str10);

let numii=[1,2,3,4];
console.log(numii);

function addition(p,q,r,s){
  return p+q+r+s;
}
console.log(addition(...numii));




//addd
let aa=[1,2,3];
let bb=[10,20,30];
let cc=[...aa, ...bb];
console.log(cc);

//spread
//rest -it collects remaining elements of an array
let rest=[90,180,30,60,360,720];
console.log(...rest);

let [a1,b12,...other]=rest;
console.log(a1,b12,other);


let nextLevel= [2,3,4,[50,60],[80,90,[50,[80,85],105]]];

let lowlevl=nextLevel.flat(50);
let [p,q,r,...others]=lowlevl;
console.log(p,q,r,others);







