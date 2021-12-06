const crypto = require('crypto')
const NodeRSA = require('node-rsa')
const fs = require('fs')

// Bob's Public key for Encryption 
// Ensure Integrity and Confidentiality
const bob_public_key = fs.readFileSync('./keys/bobPublicKey.pem', 'utf-8')
const PublicKeyOfBob = new NodeRSA(bob_public_key)

// Alice's Private key for Digital Signature
// Ensure Authenticity
const PrivateKeyOfAlice = fs.readFileSync('./keys/alicePrivateKey.pem', 'utf-8')

const doc = fs.readFileSync('sample-doc.txt')

const signer = crypto.createSign('RSA-SHA256')
signer.write(doc)
signer.end()

// Sign the doc file here
const signature = signer.sign(PrivateKeyOfAlice, 'base64')
console.log("Digital Signature: ", signature)

// Write the Signature in the txt file
fs.writeFileSync('signature.txt', signature)

// Encryption of the Doc File
const encryption = PublicKeyOfBob.encrypt(doc, 'base64')
console.log("Encrypted String: ", encryption)

// Write the Encrypted String in the txt file
fs.writeFileSync("encryption.txt", encryption)