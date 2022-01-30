//Checks whther the device is a mobile or not
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementsByClassName('clickTocall');
if (isMobile) {
	element.href = "tel:8956033119";
} else {
	element.href = "mailto:saygeinfo@gmail.com?subject=Hey! I have a requirement.";
}

// Dark Theme <--> Light Theme
var isDark = false;
var themeChanger = document.getElementById('floatingIcon');
var themeButton = document.getElementById('floatingButton');
var burger = document.getElementById('burger');
var contact = document.getElementById('contact');
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


// Makes theme dark
const makeThemedark = () => {

	// Changes moon to sun
	themeChanger.removeAttribute('class', 'fas fa-moon');
	themeChanger.setAttribute('class', 'fas fa-sun');

	// Theme button css
	themeButton.style.background = 'linear-gradient(to right, #f12711, #f5af19)';
	themeButton.style.color = 'yellow';

	// Body background black
	document.body.style.background = 'black';

	// Burger color
	burger.style.color = '#fcfcfd';

	// White Logo
	Array.from(document.getElementsByClassName('whLogo')).forEach((element) => {
		element.style.color = '#fcfcfd';
	})

	// Contact button css
	// contact.style.background = '#fcfcfd';
	// contact.style.webkitTextFillColor = 'transparent';
	// contact.style.webkitBackgroundClip = 'text';

	// Black text<-->White text
	Array.from(document.getElementsByClassName('white')).forEach((whiteText) => {
		whiteText.style.color = '#fcfcfd';
	})

	// Box Shadows
	Array.from(document.getElementsByClassName('box-shadow')).forEach((element) => {
		element.style.boxShadow = '2px 2px 16px #F2EDE8';
	})
	Array.from(document.getElementsByClassName('card')).forEach((element) => {
		element.style.boxShadow = 'none';
	})

	// Blackcard color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#24292E';
	})

	// Orange Buttons
	Array.from(document.getElementsByClassName('btn')).forEach((element) => {
		element.style.background = '#FE6D01';
	})

	// Button Shadows
	Array.from(document.getElementsByClassName('btnShadow')).forEach((element) => {
		element.style.boxShadow = '4px 2px 32px rgba(255, 144, 61, 0.75)';
	})

	// Gradients
	makeGradient('orangeSpan', '#FE6D01');
	makeGradientText('orangeSpan');
	makeGradient('grad1', '#fcfcfd');
	makeGradientText('grad1');
	makeGradient('grad2', '#fcfcfd');
	makeGradientText('grad2');
	makeGradient('card-title', '#fcfcfd');
	makeGradientText('card-title');
	Array.from(document.getElementsByClassName('card')).forEach((element) => {
		element.style.background = '#FFAF73';
	})

	// Footer color change
	document.getElementById('footer').style.background = '#24292E';
}

// Makes theme light
const makeThemelight = () => {

	// Changes sun to moon
	themeChanger.removeAttribute('class', 'fas fa-sun');
	themeChanger.setAttribute('class', 'fas fa-moon');

	// Theme button css
	themeButton.style.background = 'linear-gradient(to right, #000000, #434343)';
	themeButton.style.color = '#fcfcfd';

	// Background changes to white
	document.body.style.background = 'white';

	//Logo
	Array.from(document.getElementsByClassName('whLogo')).forEach((element) => {
		element.style.color = 'black';

	})

	// Hamburger
	burger.style.color = 'black';

	// Contact button css
	// contact.style.background = 'linear-gradient(to right, #ff0099, #493240)';
	// contact.style.webkitTextFillColor = 'transparent';
	// contact.style.webkitBackgroundClip = 'text';
	// contact.addEventListener('mousenter', hoverBlack('contact'));
	
	// White text<-->Black text
	Array.from(document.getElementsByClassName('white')).forEach((whiteText) => {
		whiteText.style.color = 'black';
	})

	// Box Shadows
	Array.from(document.getElementsByClassName('box-shadow')).forEach((element) => {
		element.style.boxShadow = '2px 2px 5px black';
	})

	// card color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#f1f1f0';
	})
	Array.from(document.getElementsByClassName('card')).forEach((element) => {
		element.style.background = '#f1f1f0';
	})

	// Shadow
	Array.from(document.getElementsByClassName('btnShadow')).forEach((element) => {
		element.style.boxShadow = 'none';
	})

	// Gradients
	makeGradient('grad1', 'linear-gradient(to right, #b92b27, #1565c0)');
	makeGradientText('grad1');
	makeGradient('card-title', 'linear-gradient(to right, #ff0084, #33001b)');
	makeGradientText('card-title');
	makeGradient('grad2', 'linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)');
	makeGradientText('grad2');
	makeGradient('btn', 'linear-gradient(135deg, #6699FF 0%, #FF3366 100%)');
	makeGradient('orangeSpan', 'linear-gradient(135deg,#D6FF7F 0%, #00B3CC 100%)');
	makeGradientText('orangeSpan');

	// Footer color change
	document.getElementById('footer').style.background = '#F2EDE8';
}

function makeGradient(className, color) {
	Array.from(document.getElementsByClassName(className)).forEach((element) => {
		element.style.background = color;
	})
}

function makeGradientText(className) {
	Array.from(document.getElementsByClassName(className)).forEach((element) => {
		element.style.webkitTextFillColor = 'transparent';
		element.style.webkitBackgroundClip = 'text';
	})
}

// function hoverBlack(id) {
// 	console.log('hello');
// 	var element = document.getElementById(id)
// 	element.style.color = 'black';
// 	element.style.webkitTextFillColor = 'transparent';
// 	element.style.webkitBackgroundClip = 'text';
// }
