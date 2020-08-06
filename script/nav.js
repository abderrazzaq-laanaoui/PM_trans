const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a")

function navClr(){
    var scroll_position = window.scrollY;
	if (scroll_position > 200) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
}

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
})

document.addEventListener('scroll',navClr);
navClr();

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
