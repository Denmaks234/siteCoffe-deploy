const burger =  document.querySelector('.burger')
const closeBtn =  document.querySelector('.close')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')
const logoBurger = document.querySelector('.logo-burger')
const body = document.querySelector('.body')

burger.addEventListener('click',()=>{
	menu.style.left = '0px';
	closeBtn.style.left = '350px';
	logo.style.display='none';
	
	

	
	if(window.innerWidth<641){
		closeBtn.style.left = '240px';
		
	}
	console.log(window.innerWidth)
	if(window.innerWidth<440){
		closeBtn.style.left = '165px';
	}
	if(window.innerWidth<375){
		closeBtn.style.left = '280px';
	}
	body.style.height='100vh'
	body.style.overflow='hidden'
})
closeBtn.addEventListener('click',()=>{
	menu.style.left = '-450px';
	closeBtn.style.left = '-350px';
	
	logo.style.display='block';
	if(window.innerWidth<870){
		logo.style.display='none';
	}
	body.style.height='100%'
	body.style.overflow='auto'
})

