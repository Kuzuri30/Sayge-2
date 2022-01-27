var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);//Checks whther the device is a mobile or not
		var element = document.getElementById('clickTocall');
		if (isMobile) {
  			element.href="tel:8600331199";
		} else {
			element.href = "mailto:saygeinfo@gmail.com?subject=Enquiry about Sayge Analytics&cc=xyz@mail.com&body=Hello!...";
		}