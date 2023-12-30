let string="";
let btn=document.querySelectorAll(".btn");
Array.from(btn).forEach((btn1)=>{
   btn1.addEventListener("click",(e)=>{
    if(e.target.innerHTML== '=')
    {
        string=eval(string);
        document.querySelector('.inp').value=string;
    }
    else if(e.target.innerHTML=='C')
    {
        string='';
        document.querySelector('.inp').value=string;
    }
    else
    {
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('.inp').value=string;
    }
   })
})