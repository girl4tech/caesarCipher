# Caesar Cipher Shift Encoder
If you're interested in learning Cryptography, the Caesar Cipher is a great example to start with. If you're a person who enjoys ancient history and tradition, the Caesar cipher is one the oldest and simplest forms of encrypting a message. It is also named after Julius Caesear who, according to Suetonius (a Roman historian), used it with a shift of 3 to encrypt military messages.

![alt tag](https://github.com/karina001/caesarCipher/blob/master/Screen%20Shot%202018-03-12%20at%206.20.14%20AM.png)

## How It Works:

**Tech used:** JavaScript

Essentially, the Caesear cipher is a type of substitution, where each letter in an original message (which in cryptography is called "plaintext"), is replaced with another letter. The letter that replaces the plaintext letter, is derived from a shift of N number, that shifts up or down the alphabet (in this case, English alphabet). 

For each letter of the alphabet, you would take its position in the alphabet, say 3 for the letter 'C', and shift it by the N number. If we had a key of +3, that 'C' would be shifted down to an 'F' - and that same process would be applied to every letter in the plaintext. In doing this, we convert a message that initially was readable, to a form that cannot be understood at first glance.  

To work with the number shift and conduct math operations more easily, I leveraged the Ascii values for each character in the alphabet. To start, the idea is to allow a user to input 2 arguments into a function: the first argument will take in a word or letter, and the second will set the number of shifts. This function subsequently converts the word or letter into its Ascii value to evaluate whether the number should be uppercase or lowercase based on the shift. The next step was to create a function that actually encrypts the message by applying the shift, and the final step was to create a function that decrypts the message by subtracting the shift. Most of the code for this program can be viewed in the screen shot above.

## Optimizations
If I had more time I would go back and add better styling to the list to make it look more modern and less retro. I am also planning on making the list full-stack by using Express JS. 

## Lessons Learned:
In completing this project I learned a lot about built-in browser variables liked Local Storage. I also learned more about the client-server model, when reviewing concepts such as the fact that HTTP is stateless, which causes an application to reset the next time it is re-opened. As a developer, I needed to store the state of your interface somewhere. Although this is normally done on the server-side, I didn't want to force people to sign up to use the app. This is one of the main reasons I decided to leverage local storage.

## Examples:
Take a look at other examples that I have in my own portfolio:

**Spanish Colors Memory Game:** https://github.com/karina001/spanishColorsMemoryGame

**WuTangClan Name Generator:** https://github.com/karina001/toDoList

**Speech Recognition App:** https://github.com/karina001/speechRecognitionApp
