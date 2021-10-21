let input=document.getElementById('guess');
let submitbtn=document.getElementById('btn');
let p1=document.getElementById('paragraph1');
let p2=document.getElementById('paragraph2');

p1.style.display="none";
p2.style.display="none";

let min=1;
let max=10;
let correctnumber=5;
submitbtn.addEventListener('click',()=>{
    correct();
})

function correct(){
    p1.style.display="block";
    p1.innerText="Yes,it is true.The correct number is 5"
    p1.style.color="green";

}