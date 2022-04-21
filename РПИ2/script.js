const newImg = ["images/woman.png","images/woman2-big.png","images/woman3-big.png", "images/woman4-big.png"];

const elem = document.getElementById("main");
if (elem.src != null){
elem.src = localStorage.getItem('1');
}


const accordion = document.getElementById('accordeon');

accordion.addEventListener('click', change);

let elLi = accordion.querySelectorAll('li')
let sel = localStorage.getItem('sel');
let unsel = localStorage.getItem('unsel');


for (let i=0; i<elLi.length; i++){

	if (elLi[i].value == "1"){
		if (elLi[i].nextElementSibling.id == sel && elLi[i].nextElementSibling.id != unsel)
		{
			hideAll();
			elLi[i].classList.add('select');
			showText(elLi[i].nextElementSibling);
		}
	}
}


function reSize(num)
{
  elem.src = newImg[num];
  localStorage.setItem('1',elem.src); 
}

window.onload = function(){
  let sel = document.getElementById("myselect");
  sel.options[0] = new Option("Select size","dis");
  sel.options[1] = new Option("XS","1");
  sel.options[2] = new Option("S","dis");
  sel.options[3] = new Option("M","3");
  sel.options[4] = new Option("L","4");
  sel.options[5] = new Option("XL","dis");
  sel.options[6] = new Option("XXL","6");

  let op =sel.getElementsByTagName("option");
  for (let i=0; i <op.length;i++)
  {
  if (op[i].value.toLowerCase() == "dis"){
    op[i].disabled=true;
	op[i].className= 'not';
  }
  }
}



function change(event) {
	let targ = event.target;
	if (targ.tagName !== 'LI') return;
	if (targ.classList.contains('select')) {
		localStorage.setItem('unsel',targ.nextElementSibling.id);
		hideAll();
	} else {
		hideAll();
		targ.classList.add('select');
		showText(targ.nextElementSibling);
		localStorage.setItem('sel', targ.nextElementSibling.id);
	}
}		
function hideAll() {
	let liEl = accordion.querySelectorAll('li');
	let divEl = accordion.querySelectorAll('div');
	for (let i = 0; i < liEl.length; i++) {
		liEl[i].classList.remove('select');
	}
	for (let i = 0; i < divEl.length; i++) {
		divEl[i].style.height = '0';
	}
}
function showText(textEl) {
	textEl.style.height = textEl.scrollHeight + 'px';
}		
	