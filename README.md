# Caesar Cipher Shift Encoder
If you're interested in learning Cryptography, the Caesar Cipher is a great example to start with. If you're a person who enjoys ancient history and tradition, the Caesar cipher is one of the oldest and simplest forms of encrypting a message. It is also named after Julius Caesear who, according to Suetonius (a Roman historian), used it with a shift of 3 to encrypt military messages.

![alt tag](https://github.com/karina001/caesarCipher/blob/master/Screen%20Shot%202018-03-12%20at%206.20.14%20AM.png)

## How It Works:

**Tech used:** JavaScript

Essentially, the Caesear cipher is a type of substitution, where each letter in an original message (which in cryptography is called "plaintext"), is replaced with another letter. The letter that replaces the plaintext letter, is derived from a shift of N number, that shifts up or down the alphabet (in this case, English alphabet). 

For each letter of the alphabet, you would take its position in the alphabet, say 3 for the letter 'C', and shift it by the N number. If we had a key of +3, that 'C' would be shifted down to an 'F' - and that same process would be applied to every letter in the plaintext. In doing this, we convert a message that initially was readable, to a form that cannot be understood at first glance.  

To work with the number shift and conduct math operations more easily, I leveraged the Ascii values for each character in the alphabet. To start, the idea was to allow a user to input 2 arguments into a function: the first argument takes in a word or letter, and the second sets the number of shifts. This function subsequently converts the word or letter into its Ascii value to evaluate whether the letter should be uppercase or lowercase (based on the shift number) and apply the shift in the right direction. The next step was to create a function that actually encrypts the message by applying the shift, and the final step was to create a function that decrypts the message by subtracting the shift. Most of the code for this program can be viewed in the screen shot above.

## Optimizations
When I have more time, I'd like to go back and actually add an interface so users can interact with the cipher and encrypt or decrypt their messages for fun. I plan on adding HTML / CSS to incorporate styling and complete the project from a 360 perspective. At the moment, there is no live demo but the .js file can be copied and pasted into a https://jsbin.com/ or https://repl.it/ if you want to give it a go!

## Lessons Learned:
In completing this project I learned a lot about Cryptography in terms of its general history, future and use cases. I also enjoyed getting my feet in python when writing this program.

## Examples:
Take a look at other examples that I have in my own portfolio:

**Spanish Colors Memory Game:** https://github.com/karina001/spanishColorsMemoryGame

**WuTangClan Name Generator:** https://github.com/karina001/toDoList

**Speech Recognition App:** https://github.com/karina001/speechRecognitionApp
