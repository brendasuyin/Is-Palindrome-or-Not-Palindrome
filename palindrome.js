function isPalindrome(str){
	if (str !== str.split("").reverse("").join("")){
		return str + (" is not polindrome");
	}

	else {return str + (" is polindrome");}
}


document.write(isPalindrome("Brenda"));

