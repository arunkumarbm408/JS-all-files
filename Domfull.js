//Dom Methods
//1.getElementById
//it return an object which element having an id as well as value as document object
//it is used to target single html element

let  elementId=document.getElementById("demo");
console.log(elementId,typeof elementId);

//innerHTML(property of DOM)
//Which displays the text by taking the behaviour of the specific tag
//elementId.innerHTML="<h1>I want to change</h1>";


//innerText(property of DOM)
//it dispays text but does not take behaviour of tag
//elementId.innerText="<h1>I too want to change</h1>";
elementId.innerText="Web technology";

//styling tht html element
elementId.style.color="red";
elementId.style.fontSize="50px";

//****************************************** */

//2.get elements by class method
     //getelementsByclassName return an object of html document which targets the elements having a class of value
     //getelementsByclassName returns in the form of html collection
     //why bczz it targets the elements in a descendent as well as in normal way

     let elementscls=document.getElementsByClassName('test');
     console.log(elementscls, typeof elementscls);
     console.log(Array.isArray(elementscls));
     elementscls[2].innerHTML="chnged";

     //to style the class element
     elementscls[1].style.color='Red';
     elementscls[0].style.backgroundColor='red';

     //3.get elements by Tag name
     //getelementby tag name return the object by the element which is having only tag
     //It return interms of html collection bcz  it targets the document which is having multiple of same tags
      elementsTag=document.getElementsByTagName("article");
      console.log(elementsTag);
    
      elementsTag[1].style.backgroundColor="blue";
      elementTag[0].innerHTML="<h1>this is article</h1>";

    //   ***********************************************


         //1) let name=document.querySelector('button');
        // console.log(name);

        // function demo()
        // {
        //     document.body.style.backgroundColor="blue";
        // }

        //2) let btn=document.querySelector('button');
        // console.log(btn);
        // btn.onclick=()=>{
        //     document.body.style.backgroundColor="red";
        // }

        //3) let btn=document.querySelector('button');
        // console.log(btn);
        // btn.addEventListener('click', ()=>{
        //     document.body.style.backgroundColor="gold";
        // })

        let btn=document.querySelector('button');
        console.log(btn);
        btn.addEventListener('click', ()=>{
            let div=document.querySelector('div');
            div.innerText="hello world";
            div.style.color="brown";
            div.style.fontWeight="bolder"
        })

        let createEle=document.createElement('div');
        console.log(createEle);
        createEle.innerText="content";
        createEle.id="abc";
        createEle.className="xyz";
        document.body.append(createEle);
        let idName=document.getElementById('abc');
        idName.style.color="red";

        let a=document.createElement('aside');
        a.setAttribute("href","https://www.google.com");
        console.log(a);

        let b=a.getAttribute('href');
        console.log(b);


        // 8***********************************************

        let table=document.createElement('table');
console.log(table);
// table.id="demo";
// table.innerText="worst";

table.style.border="1px solid red";

tr1=document.createElement('tr');
console.log(tr1)
td1=document.createElement('td');
td1.style.border="1px solid red";
td2=document.createElement('td');
td2.style.border="1px solid red";
console.log(td1,td2);


tr1.append(td1,td2);
table.appendChild(tr1)
document.body.appendChild(table)

td1.innerText="Id";
td2.innerText="Name";


tr2=document.createElement('tr');
console.log(tr2)
td11=document.createElement('td');
td11.innerText="100";

td11.style.border="1px solid red";
td12=document.createElement('td');
td12.innerText="abc"
td12.style.border="1px solid red"
console.log(td11,td12);
tr2.append(td11,td12);
table.appendChild(tr2);




//**************************************************************** */
var aa="global"
let bb="script"
if(true)
{
    var cc="global block"
    let dd="block"


}

function test(){
    var a=13;
    let b=14;
    console.log(a);
    console.log(b);
}
test()

console.log(a);
console.log(b);


//Own words
//When let & cont are declared globally then the scope is Script,if it is declared inside any block like if,while then the scope is Block
//If we try to print the variable which is not declared then it will display not defined
//whenever the variable is only declared but not initiaised ,it will display undefined


// ********************************************************************







