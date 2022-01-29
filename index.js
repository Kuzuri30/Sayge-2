//Checks whther the device is a mobile or not
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('clickTocall');
if (isMobile) {
	element.href = "tel:8600331199";
} else {
	element.href = "mailto:saygeinfo@gmail.com?subject=Enquiry about Sayge Analytics&cc=xyz@mail.com&body=Hello!...";
}

// Dark Theme <--> Light Theme
var isDark = true;
var themeChanger = document.getElementById('floatingIcon');
var themeButton = document.getElementById('floatingButton');
var burger = document.getElementById('burger');
const toggleTheme = () => {
	if (isDark) {
		makeThemelight();
		isDark = false;
	}
	else {
		makeThemedark();
		isDark = true;
	}
}

// Makes theme light
const makeThemelight = () => {
	// Changes sun to moon
	themeChanger.removeAttribute('class', 'fas fa-sun');
	themeChanger.setAttribute('class', 'fas fa-moon');
	// Background changes to white
	document.body.style.background = 'white';
	// Footer color change
	document.getElementById('footer').style.background = '#F2EDE8';
	// Theme button css
	themeButton.style.background = 'linear-gradient(to right, #000000, #434343)';
	themeButton.style.color = '#fcfcfd';
	// Hamburger
	burger.style.color = 'black';
	// White text<-->Black text
	Array.from(document.getElementsByClassName('white')).forEach((whiteText) => {
		whiteText.style.color = 'black';
	})
	// Box Shadows
	Array.from(document.getElementsByClassName('box-shadow')).forEach((element) => {
		element.style.boxShadow = '2px 2px 16px black';
	})
	//Gradient Logo
	Array.from(document.getElementsByClassName('whLogo')).forEach((element) => {
		element.style.color= 'black';
		
	})
	// card color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#f1f1f0';
	})
	Array.from(document.getElementsByClassName('card')).forEach((element) => {
		element.style.background = '#f1f1f0';
	})
	// Shadow
	Array.from(document.getElementsByClassName('btnShadow')).forEach((element)=>{
		element.style.boxShadow = 'none';
	})
	// Gradients
	makeGradient('grad1','linear-gradient(to right, #b92b27, #1565c0)');
	makeGradientText('grad1');
	makeGradient('card-title','linear-gradient(to right, #ff0084, #33001b)');
	makeGradientText('card-title');
	makeGradient('grad2','linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)');
	makeGradientText('grad2');
	makeGradient('btn','linear-gradient(135deg, #6699FF 0%, #FF3366 100%)');
	makeGradient('orangeSpan','linear-gradient(135deg,#D6FF7F 0%, #00B3CC 100%)');
	makeGradientText('orangeSpan');
}

// Makes theme dark
const makeThemedark = () => {
	// Changes moon to sun
	themeChanger.removeAttribute('class', 'fas fa-moon');
	themeChanger.setAttribute('class', 'fas fa-sun');
	// Body background black
	document.body.style.background = 'black';
	// Footer color change
	document.getElementById('footer').style.background = '#24292E';
	// Theme button css
	themeButton.style.background = 'linear-gradient(to right, #f12711, #f5af19)';
	themeButton.style.color = 'yellow';
	// Burger color
	burger.style.color = '#fcfcfd';
	// Black text<-->White text
	Array.from(document.getElementsByClassName('white')).forEach((whiteText) => {
		whiteText.style.color = '#fcfcfd';
	})
	// Box Shadows
	Array.from(document.getElementsByClassName('box-shadow')).forEach((element) => {
		element.style.boxShadow = '2px 2px 16px #F2EDE8';

	})
	// White Logo
	Array.from(document.getElementsByClassName('whLogo')).forEach((element) => {
		element.style.color = '#fcfcfd';
	})
	// Blackcard color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#24292E';
	})

	Array.from(document.getElementsByClassName('btn')).forEach((element)=>{
		element.style.background = '#FE6D01';
	})

	Array.from(document.getElementsByClassName('btnShadow')).forEach((element)=>{
		element.style.boxShadow = '4px 2px 32px rgba(255, 144, 61, 0.75)';
	})
	makeGradient('orangeSpan','#FE6D01');
	makeGradientText('orangeSpan');
	makeGradient('grad1','#fcfcfd');
	makeGradientText('grad1');
	makeGradient('grad2','#fcfcfd');
	makeGradientText('grad2');
	makeGradient('card-title','#fcfcfd');
	makeGradientText('card-title');
	Array.from(document.getElementsByClassName('card')).forEach((element) => {
		element.style.background = '#FFAF73';
	})
}

function makeGradient(className, color){
	Array.from(document.getElementsByClassName(className)).forEach((element)=>{
		element.style.background = color;
	})
}

function makeGradientText(className){
	Array.from(document.getElementsByClassName(className)).forEach((element)=>{
		element.style.webkitTextFillColor = 'transparent';
		element.style.webkitBackgroundClip = 'text';
	})
}
