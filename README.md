# Caesar Cipher Shift Encoder
If you're interested in learning Cryptography, the Caesar Cipher is a great example to start with. If you're a person who enjoys ancient history and tradition, the Caesar cipher is one the oldest and simplest forms of encrypting a message. It is also named after Julius Casear who, according to Suetonius (a Roman historian), used it with a shift of 3 to encrypt military messages.

![alt tag](https://github.com/karina001/caesarCipher/blob/master/Screen%20Shot%202018-03-12%20at%206.20.14%20AM.png)

## How It Works:

**Tech used:** JavaScript

Essentially, the Casear cipher is a type of substitution, where each letter in a message (which in cryptography is called "plaintext") is replaced with another letter. The letter that replaces the plaintext letter, is derived from a shift of N number, that shifts up or down the alphabet. 

For each letter of the alphabet, you would take its position in the alphabet, say 3 for the letter 'C', and shift it by the key number. If we had a key of +3, that 'C' would be shifted down to an 'F' - and that same process would be applied to every letter in the plaintext.

In this way, a message that initially was quite readable, ends up in a form that cannot be understood at a simple glance. 

undefined
For example, here's the Caesar Cipher encryption of a full message, using a left shift of 3. 

## Optimizations
If I had more time I would go back and add better styling to the list to make it look more modern and less retro. I am also planning on making the list full-stack by using Express JS. 

## Lessons Learned:
In completing this project I learned a lot about built-in browser variables liked Local Storage. I also learned more about the client-server model, when reviewing concepts such as the fact that HTTP is stateless, which causes an application to reset the next time it is re-opened. As a developer, I needed to store the state of your interface somewhere. Although this is normally done on the server-side, I didn't want to force people to sign up to use the app. This is one of the main reasons I decided to leverage local storage.

## Examples:
Take a look at other examples that I have in my own portfolio:

**Spanish Colors Memory Game:** https://github.com/karina001/spanishColorsMemoryGame

**WuTangClan Name Generator:** https://github.com/karina001/toDoList

**Speech Recognition App:** https://github.com/karina001/speechRecognitionApp
