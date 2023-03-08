/*const myElement = document.getElementsByTagName("button");
var x='',y;

for(var i=0;i<myElement.length;i++){
    myElement[i].addEventListener('click',(e)=>eventlist(e))

} 


function eventlist(e){
    x+=e.target.innerHTML
    document.getElementsByTagName('p')[0].innerText=x;  
}
*/              
let string="";
var a=9;
let x="";
const btns =document.getElementsByTagName("button");

//for(var i=0;i<btns.length;i++){
    a.addEventListener('click',function itoe(e)
//}   
function itoe(e){
    x=e.target.innerText;
    console.log(e);
});
 /*
if(x=='='){
    string=eval(string);
    console.log(string);
}
else if(x=="/"){
   
    console.log(" ");
}
else {
    console.log(x);
    string=string+x;
}
};                                                                
    
    