// var main=document.createElement("main");
// var m1=document.body.appendChild(main);
// var getmain=document.querySelector("main");
// var table=document.createElement("table");
// var t1=getmain.appendChild(table);
// var tr1=document.createElement("tr")
// var tr2=document.createElement("tr")
// var tr3=document.createElement("tr")
// var gettab=document.querySelector("table")
// var appendintab=gettab.append(tr1,tr2,tr3);
// var td1=document.createElement("td")
// var td2=document.createElement("td")
// var td3=document.createElement("td")
// var gettd1=document.getElementsByTagName("tr");
// var appendtd=gettd1[0].append(td1,td2,td3);
// var appendtd1=gettd1[1].append(td1,td2,td3);
// var appendtd2=gettd1[2].append(td1,td2,td3);


// var main=document.createElement("main");
// var table=document.createElement("table")
// var tr1=document.createElement("tr")
// var tr2=document.createElement("tr")
// var tr3=document.createElement("tr")
// var td1=document.createElement("td")
// var td2=document.createElement("td")
// var td3=document.createElement("td")
// var td4=document.createElement("td")
// var td5=document.createElement("td")
// var td6=document.createElement("td")
// var td7=document.createElement("td")
// var td8=document.createElement("td")
// var td9=document.createElement("td")
// td1.innerText="1"
// td2.innerHTML="<h1>2</h1>"
// td3.innerText="3"
// td4.innerText="4"
// td5.innerHTML="<h2>5</h2>"
// td6.innerText="6"
// td7.innerText="7"
// td8.innerText="<h3>8</h3>"
// td9.innerText="9";
// document.body.appendChild(main)
// main.appendChild(table)
// table.append(tr1,tr2,tr3)
// tr1.append(td1,td2,td3)
// tr2.append(td1,td2,td3)
// tr3.append(td1,td2,td3)










// function generate(){
//     var ans=parseInt(Math.random()*1000000);
//     if(ans<1000000)
//     {
//         ans+=1000000;
//     }
//     ans="#"+ans;
//     //console.log(ans);
//     return ans;
// }

// console.log(generate());
// function changeBgcolor(x){
//     document.body.style.background=x
// }


// var btn=document.querySelector("button");
// btn.addEventListener("mouseover",()=>{
//     changeBgcolor(generate())
// })

// document.body.addEventListener("keyup",()=>{
//     changeBgcolor(generate())
// })

// document.body.addEventListener("resize",()=>{
//     changeBgcolor(generate())
// })

function test1()
{
    var input=document.querySelector("input").value;
    console.log(input);
    document.body.style.background=input
}












