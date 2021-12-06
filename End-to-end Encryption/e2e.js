const crypto = require('crypto')
const E2E = require('e2e-encryption')

const alice = crypto.getDiffieHellman('modp15')
const bob = crypto.getDiffieHellman('modp15')

// console.log(bob.getPrime().toString('hex'))

alice.generateKeys()
bob.generateKeys()

/*-----------------------------
public and private key of alice
------------------------------*/ 
// console.log("Public key of Alice: ",alice.getPublicKey().toString('hex'), "\n")
// console.log("Private key of Alice: ",alice.getPrivateKey().toString('hex'), "\n")


/*---------------------------
public and private key of bob
----------------------------*/ 
const bob_public_key = console.log("Public key of Bob: ",bob.getPublicKey().toString('hex'), "\n")
// console.log("Private key of Alice: ",bob.getPrivateKey().toString('hex'))



// The second parameter defines the type of input we are getting in the first parameter
// if the is buffer so that we can pass null here 
// but it's a buffer so we don't need to pass in the second parameter
// 3rd parameter is the output type
const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex')
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex')

console.log(aliceSecret === bobSecret)