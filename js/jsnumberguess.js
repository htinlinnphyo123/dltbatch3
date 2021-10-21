const game=document.querySelector("#game");
const gessinput=document.getElementById("guessinput");
const gessbtn=document.getElementById("guessbtn");
const msg1=document.querySelector(".message1");
const msg2=document.querySelector(".message2")
const minum=document.querySelector(".minumber");
const maxnum=document.querySelector(".maxnumber");


//game value
let min=1;
let max=10;
let guessleft=3;
let winningnum =getrandom(min,max);

minum.textContent=min;
maxnum.textContent=max;

gessbtn.addEventListener('click',function(){

	let guess=parseInt(guessinput.value);
	// console.log(guess);
	// console.log(typeof guess);

	if(guess<min || guess>max || isNaN(guess)){

		setmessage2(`please enter a number between ${min} to ${max}`,"red");
	}
	

	if(guess===winningnum){
		//gameover win
		//disable input
		// guessinput.disabled=true;
		// guessinput.style.borderColor="green";
		// message1.innerText=`${winningnum} is correct ! You won`

		// setmessage1(`${winningnum} is correct ! You won`,"green");

		// guessbtn.value="Play Again";

		gameover(true,`${winningnum} is correct ! You won`)

	}else{
		guessleft -=1;

		if(guessleft === 0){
			//gameover lost
			// disabled inputbox
			gameover(false,`Game over ! You Lost , The correct number is ${winningnum}`)
			// guessinput.disabled=true;
			// guessinput.style.borderColor="red";
			// setmessage1(`Game over ! You Lost , The correct number is ${winningnum}`,"red");
		}else{
			//game continue
			setmessage1(`${guess} is not correct . ${guessleft} left`,"red");
			guessinput.style.borderColor="red";
			// guessinput.focus();
			guessinput.value="";
		}
	}

})


function setmessage2(msg,color){
	msg2.style.color=color;
	msg2.textContent=msg;

	setTimeout(function(){
		msg2.textContent='';
	},1000)
}

function setmessage1(msg,color){
	msg1.textContent=msg;
	msg1.style.color=color;
}

function gameover(won,msg){

	let color;
	won === true ? color="green" : color="red"; 


	guessinput.style.borderColor=color;

	setmessage1(msg,color);

	guessinput.disabled=true;

	guessbtn.value="Play Again";

	guessbtn.classList.add("play-again");
}


game.addEventListener('mouseup',function(e){

	if(e.target.className==="guessbtn play-again"){

		window.location.reload();
	}

})

// forwinningnumber
function getrandom(min,max){

	const rdnnumber = Math.floor(Math.random() * (max-min+1) + min );
	return rdnnumber;
}








