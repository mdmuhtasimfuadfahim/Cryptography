const crypto = require('crypto')
const NodeRSA = require('node-rsa')
const fs = require('fs')

const bob_public_key = fs.readFileSync('./keys/bobPublicKey.pem', 'utf-8')
const PublicKeyOfBob = new NodeRSA(bob_public_key)

const alice_private_key = fs.readFileSync('./keys/alicePrivateKey.pem', 'utf-8')

const doc = fs.readFileSync('./sample-doc.txt')

// const encryption = PublicKeyOfBob.encrypt(doc, 'base64')
// console.log("Encrypted Message: ", encryption)

// fs.writeFileSync("encryption.txt", encryption)

const encryptedFile = fs.readFileSync('./encryption.txt', 'utf-8')

const signer = crypto.createSign('RSA-SHA256')
signer.write(encryptedFile)
signer.end()

const signature = signer.sign(alice_private_key, 'base64')
console.log("Digital Signature: ", signature)

fs.writeFileSync("signature.txt", signature)