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
	Array.from(document.getElementsByClassName('gradient')).forEach((element) => {
		element.style.background = 'linear-gradient(135deg, #6699FF 0%, #FF3366 100%)';
		element.style.webkitTextFillColor = 'transparent';
		element.style.webkitBackgroundClip = 'text';
	})
	// Blackcard color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#F2EDE8';
	})

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
	// Normal Logo
	Array.from(document.getElementsByClassName('gradient')).forEach((element) => {
		element.style.background = '#fcfcfd';
		element.style.webkitTextFillColor = 'transparent';
		element.style.webkitBackgroundClip = 'text';
	})
	// Blackcard color change
	Array.from(document.getElementsByClassName('blackCard')).forEach((element) => {
		element.style.background = '#24292E';
	})
}
