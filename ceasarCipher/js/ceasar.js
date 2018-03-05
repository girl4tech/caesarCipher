function shift_letter(letter, shift){//parameter variables are defined when the function is called
	//convert letter to ascii
  	// - capital letters stay as capital letters
  	// - lowercase letters stay as lowercase letters
  	// - all other characters stay as themselves
  	var asciiVal = letter.charCodeAt(0);//gives us the ascii value of the character
  	//check if uppercase
  	if(asciiVal >= 65 && asciiVal <= 90){
      	//letter is uppercase, do some math
      	asciiVal = ((asciiVal - 65 + shift) % 26);
		if (asciiVal < 0) asciiVal = 91 + asciiVal;
		else asciiVal += 65;
    }
  	if(asciiVal >= 97 && asciiVal <= 122){
    	//letter is lowercase, do other math
      	asciiVal = ((asciiVal - 97 + shift) % 26);
		if (asciiVal < 0) asciiVal = 123 + asciiVal;
		else asciiVal += 97;
    }
  	//return char representation of ascii_val
  	return String.fromCharCode(asciiVal);//gives us the character from the ascii value
}

function code(text, shift){
    var codedText = "";
    for (var i=0; i<text.length; i++){//count starts at one, indeces start at 0
      codedText += shift_letter(text[i], shift);//text is entire string, letter is single character. you can loop through a string like you would an array.
    }
	return codedText;
}

function decode(text, shift){
	return code(text, -shift);
}

var shift = 9,
	uncoded = "Hello, Karina!",
    coded = code(uncoded, shift);
console.log(coded);
console.log(decode(coded, shift));
