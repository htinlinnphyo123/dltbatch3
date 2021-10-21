let val;
val = document;
val=document.head;
// console.log(val);

				//As string
val=document.links[0].className;
				//as array DOM
val=document.links[0].classList[0]; //=>delete-item, to remember DOM
// console.log(val);



val=document.images[0];
val=document.images[0].src;
val=document.images[0].className;
val=document.images[0].classList;
val=document.images[0].alt;
val=document.images[0].getAttribute("src");
val=document.images[0].getAttribute("abc");

// console.log(val);

//dom = document object model
document.getElementById("task-title").style.background ="grey";
document.getElementById("task-title").style.color="#fff";
document.getElementById("task-title").style.padding="5px";

document.getElementById("task-title").innerText="My List";
document.getElementById("task-title").textContent="My List";
document.getElementById("task-title").innerHTML="<span style='color:red;'>My List</span>";

const item=document.getElementsByClassName("collection-item");

item[3].style.color="blue";
// item[3].innerText="Have to shop";

const lis=document.getElementsByTagName("li");
lis[0].style.color="red";
// lis[0].textContent="Have to visit";

// console.log(document.querySelector("h4"));
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".task-title"));

// console.log(document.querySelector("li"));
// console.log(document.querySelector("ul li"));
document.getElementById("task-title").style.color="red";
document.querySelector("ul li:nth-of-type(1)").style.color="purple";
// document.querySelector("ul li:first-of-type").innerText="Have to go";

document.querySelector("ul li:nth-of-type(odd)").style.background="silver";
document.querySelector("ul li:nth-of-type(even)").style.background="grey";

//HTML collection cannot be looped so it need to change to array

const lists=document.getElementsByTagName("li");

const arrlis = Array.from(lists);

console.log(arrlis);

arrlis.forEach(function(arrli,idx){
	index=idx + 1;
	// console.log(arrli);
	// console.log(arrli.className);
	// arrli.innerText = "Hello";
	// arrli.textContent=`${index} : Hello Myanmar`;
})

// document.querySelectorAll() NOTELIST nae lr tl
let itsqs = document.querySelector(".collection .collection-item");
let itsqsas = document.querySelectorAll(".collection .collection-item");
// console.log(itsqsas);
// console.log(itsqsas.length);
// console.log(itsqsas[1]);

itsqsas.forEach(function(itsqas,idx){
	// console.log(itsqas);
	// console.log(itsqas.className);
	// itsqas.innerText="Hello World";
	// itsqas.textContent=`${idx} : Hello World`;

})


const liodds =document.querySelectorAll("li:nth-of-type(odd");
const lievens=document.querySelectorAll("li:nth-of-type(even");

liodds.forEach(function(liodd){
	liodd.style.background="gold";
})

for(let i=0;i<lievens.length;i++){
	lievens[i].style.background="orange";
}

//children
let chil;
const getul=document.querySelector("ul.collection");
const getli=document.querySelector("li.collection-item");

chil=document.getElementsByClassName(".collection-item");
chil=document.getElementsByTagName("li")
chil=document.querySelector("ul").getElementsByClassName(".collection-item");

chil = getul.children;
chil=getul.children[1];

//children of children

chil=getul.children[1].children[0];
chil=getul.children[1].children[0].children[0];
chil=getul.children[1].children[0].children[0].className;

//first child
chil=getul.firstElementChild;

//last child
chil=getul.lastElementChild;

//count child element
//chill=getul.children.length;
chil=getul.childElementCount;

//get parent element
chil=getli.parentElement;

//get next sibling ,,, index+1
chil=getli.nextElementSibling; //Index1
chil=getli.nextElementSibling.nextElementSibling; //index 1+1

//get prev sibling ,,,index-1
chil=getli.nextElementSibling.previousElementSibling;
// console.log(chil);



///create element
const li=document.createElement("li");

//add id
li.id="new-item"
//add class
li.className="collection-item";
li.setAttribute("title","new-item");

//createTextNode
// li.innerText="abc";
// li.textContent="efg"
// li.innerHTML="hik";

li.appendChild(document.createTextNode("Hello Mandalay"));

// console.log(li);


//create element for link
const link=document.createElement("a");
link.setAttribute("href","#");
link.id="delete-item6"
link.className="collection-item";
link.innerHTML=`<i class="far fa-trash-alt">`
// console.log(link);

li.appendChild(link);

document.querySelector("ul.collection").appendChild(li);


//replace child
const newheading=document.createElement("h2");
newheading.id="task-title";
newheading.className="task-title";
newheading.appendChild(document.createTextNode("Hello World"));


const oldheading=document.getElementById("task-title");
const cardaction=document.querySelector(".card-action");

// replace
cardaction.replaceChild (newheading,oldheading);


const lts=document.querySelectorAll("li");

// lts[5].remove();

const ullts=document.querySelector("ul");

ullts.removeChild(ullts.children[5]);


const firli=document.querySelector("li");

const flink =firli.children[0];

// console.log(flink);
// let lia=flink.className;
// console.log(lia);
// lia=flink.classList;
// console.log(lia);


//change class selector name
// flink.className="delete-item disable";
// console.log(flink);

//replace class(old,new)
// flink.classList.replace("active","disable");

//add class
// flink.className="delete-item active";
// flink.classList.add("disable");

let lk=flink.getAttribute("href");
// console.log(lk);
lk=flink.setAttribute("href","https://google.com");

let clearbtn=document.querySelector(".clear-tasks");
// clearbtn.addEventListener("click",function(e){
// 	console.log("hello world");

// 	e.preventDefault();
// })

clearbtn.addEventListener('click',myclick);

function myclick(e){
	// console.log("hello world");

	e.preventDefault();
	let val;
	val=e.target;
	val=e.target.id;
	val=e.target.className;
	val=e.target.classList;

	//event type
	val=e.type;

	//cooridinate event
	val=e.clientX;//(to the window)
	val=e.clientY;
	console.log(val);
	val=e.offsetY;//to  the element
	val=e.offsetX;
	console.log(val);
	e.target.innerText="Click Me"
	// console.log(val);


}

//mouseevent
//click
// clearbtn.addEventListener("click",runevent);

// function runevent(e){
// 	console.log(`Event type = ${e.type}`);
// }

//doubleclick
// clearbtn.addEventListener('dblclick',runevent);

//mouseup,mousedown

// clearbtn.addEventListener("mouseup",runevent);

//mouseenter,mouseleave
// clearbtn.addEventListener('mouseenter',runevent);
// clearbtn.addEventListener('mouseleave',runevent);

//mousemove
clearbtn.addEventListener('mousemove',runevent);
function runevent(e){
	console.log(e.type);

	const heading=document.querySelector(".card-content h2");
	// heading.textContent=`MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;

	// document.body.style.background=`rgba(${e.offsetX},${e.offsetY},1)`;
}



let taskinput=document.getElementById("task");
let form=document.querySelector("form");

//get balue by click submit
// form.addEventListener("submit",runevent2);

//get value by typing
// taskinput.addEventListener("keydown",runevent2);
// taskinput.addEventListener("keyup",runevent2);
// taskinput.addEventListener("keypress",runevent2);
// taskinput.addEventListener('focus',runevent2);
// taskinput.addEventListener('blur',runevent2);

//any kind of input
// taskinput.addEventListener('input',runevent2);
// taskinput.addEventListener('cut',runevent2);
taskinput.addEventListener('paste',runevent2);

function runevent2(e){
	console.log(`Event type = ${e.type}`);

	console.log(taskinput.value);
	// e.preventDefault();
}


//event bubbling event deligation.....................................................................................

//event bubbling

document.querySelector(".card-title").addEventListener('click',function(){
	console.log('i am card-title');
})

document.querySelector('.card-action').addEventListener('click',function(){
	console.log('i am card action');
})

//element deligation
// document.body.addEventListener('click',deleteitem);

// function deleteitem(e){
// 	// console.log(e.target);
// 	// console.log(e.target.className);
// 	// console.log(e.target);

// 	// if(e.target.className==="far fa-trash-alt"){
// 	// 	console.log("hay");
// 		e.preventDefault();
// 	// }

// 	// if(e.target.className="active"){
// 	// 	console.log(e.target.parentElement);
// 	// }

// 	if(e.target.parentElement.classList.contains("active")){
// 		e.target.parentElement.parentElement.remove();
// 	}
// }
//DOMTokenList ,

// storage
document.querySelector('.form').addEventListener('submit',function(e){
	// console.log('hay');
	e.preventDefault();

	const newtask2=document.getElementById('task').value;
	// console.log(newtask2);

	// localStorage.setItem('name','kyaw kyaw');

	let myjob;

	if(localStorage.getItem('tasks')===null){
		myjob=[]
		// console.log(typeof myjob);		
	}else{
		myjob=JSON.parse(localStorage.getItem("tasks"));
		// localStorage.myjob.clear();
	}
	console.log(typeof myjob);
	myjob.push(newtask2);

	localStorage.setItem('tasks',JSON.stringify(myjob));
})
// localStorage.clear();

let mytasks=JSON.parse(localStorage.getItem("tasks"));
console.log(mytasks);
console.log(typeof mytasks);
console.log(mytasks[1]);

mytasks.forEach(function(mytask){
	console.log(mytask);
})








