let results=document.getElementById('result');
let restart=document.getElementById('restart');

results.focus();

restart.addEventListener('click',()=>{
    results.value="";
})

function backspace(){
                                            //start,end/length
    results.value=results.value.substring(0,results.value.length-1);
}

function display(value){
    results.value += value;
}

function calculate(){
    results.value= eval(results.value);
}