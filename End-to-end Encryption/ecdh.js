const crypto = require('crypto')

// bitcoin uses secp256k1
// console.log(crypto.getCurves())
// it gives a shared secret which is 256 bits long

// Alice will generate in in her machine
const alice = crypto.createECDH('secp256k1')
alice.generateKeys()

// Bob will do it in his own machine
const bob = crypto.createECDH('secp256k1')
bob.generateKeys()

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64')
const bobPublicKeyBase64 = bob.getPublicKey().toString('base64')
// console.log(alicePublicKeyBase64, "\n",bobPublicKeyBase64)

// second key is base64 because the public key is in base64 format
// third parameter returns in hex format output
const aliceSharedKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex')
const bobSharedKey = bob.computeSecret(alicePublicKeyBase64, 'base64', 'hex')

console.log(aliceSharedKey === bobSharedKey)
console.log(aliceSharedKey)
console.log(bobSharedKey)
console.log(bobSharedKey.length * 4)