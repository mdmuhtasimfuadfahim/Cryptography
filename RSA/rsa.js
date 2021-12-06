const NodeRSA = require('node-rsa')


const Key = new NodeRSA({b: 1024}) //public & private key
let secret = "Welcome to the Basics of Blockchain Computation"

/*---------------------------------------
first perameter is the data and 
the second parameter is the encoding type
---------------------------------------*/ 

// If you don't give the encoding type then it will return the secret in a bytes format
var encryptString = Key.encrypt(secret, 'base64') //public
console.log("encrypted string: ", encryptString, "\n")

// if we send it in base64 format then we have to decode it so instead of base64 I'm directly making it UTF8 format. Human readable.
var decryptString = Key.decrypt(encryptString, 'utf8') //private
console.log("decrpted string: ", decryptString)


