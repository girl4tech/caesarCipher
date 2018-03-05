function shift_letter(letter, x){//parameter variables are defined when the function is called
	//convert letter to ascii
  	// - capital letters stay as capital letters
  	// - lowercase letters stay as lowercase letters
  	// - all other characters stay as themselves
  	var asciiVal = letter.charCodeAt(0);//gives us the ascii value of the character
  	//check if uppercase
  	if(asciiVal >= 65 && asciiVal <= 90){
      	//letter is uppercase, do some math
      	asciiVal = ((asciiVal - 65 + x) % 26) + 65;
    }
  	//check if lowercase
  	if(asciiVal >= 97 && asciiVal <= 122){
    	//letter is lowercase, do other math
      	asciiVal = ((asciiVal - 97 + x) % 26) + 97;
    }
  	//return char representation of ascii_val
  	return String.fromCharCode(asciiVal);//gives us the character from the ascii value
}

function code(text, shift){
    var codedText = "";
    for (var i=0; i<text.length; i++){//count starts at one, indeces start at 0
      	//each letter is coded, one at a time
      	//and added to the codedText string
      	codedText += shift_letter(text[i], shift);//text is entire string, letter is single character. you can loop through a string like you would an array.
    }
	return codedText;
}

function decode(text, shift){
	return code(text, -shift);
}

var shift = 9,
	uncoded = "Hello, Karina!",
    coded = code(uncoded, 9);
console.log(coded);
console.log(decode(coded, shift));



/*
# convert letter to ascii and shift
def shift_letter(letter, shift):
  # 1. Convert Letter to ascii
  ascii_val = ord(letter)//charCodeAt = Ord
  # 2. Check if uppercase
  if(ascii_val >= 65 or ascii_val <= 90):
    # a. Do some math
    ascii_val = ((ascii_val - 65 + shift  ) % 26) + 65
  else:
    # b. Letter is lowercase. do other math
     ascii_val = ((ascii_val - 97 + shift  ) % 26) + 97

  # Return char representation of ascii_val
  return chr(ascii_val)


def code( text, shift ):
    # 1. Start with empty string
    coded_text = ""

    # Loop over each letter in text
    for letter in text:
        coded_text += shift_letter(letter, shift)
    return coded_text



def decode( text, shift ):
    # 1. Start with empty string
    coded_text = ""
    # 2. Since we are decode, we want to shift in opposite way
    shift = shift * -1

    # 3. Loop over letter and decode
    for letter in text:
        coded_text += shift_letter(letter, shift)

    return coded_text
*/
