const crypto = require('crypto')
const aes256 = require('aes256')

const alice = crypto.createECDH('secp256k1') 
alice.generateKeys()
const bob = crypto.createECDH('secp256k1')
bob.generateKeys()

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64')
const bobPublicKeyBase64 = bob.getPublicKey().toString('base64')
// console.log("Alice's public key: ", alicePublicKeyBase64)
// console.log("Bob's public key: ", bobPublicKeyBase64)


const aliceSharedKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex')
const bobSharedKey = bob.computeSecret(alicePublicKeyBase64, 'base64', 'hex')


// console.log(aliceSharedKey === bobSharedKey)
// console.log(aliceSharedKey)
// console.log(bobSharedKey)

const message = "Welcome to Basics of Blockchain Computaiton"

// first one is the key
// second one is the message
const encrypted = aes256.encrypt(aliceSharedKey, message)
console.log("Encrypted message: ", encrypted)
const decrypted = aes256.decrypt(bobSharedKey, encrypted)
console.log("Decryted message: ",decrypted)