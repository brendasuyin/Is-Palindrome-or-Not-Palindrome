function isPalindrome(str){
	if (str !== str.split("").reverse("").join("")){
		return false;
	}

	else {return true;}
}


document.write(isPalindrome("head"));

