const crypto = require('crypto')
const NodeRSA = require('node-rsa')
const fs = require('fs')

const bob_private_key = fs.readFileSync('./keys/bobPrivateKey.pem', 'utf-8')
const PrivateKeyOfBob = new NodeRSA(bob_private_key)

const alice_public_key = fs.readFileSync('./keys/alicePublicKey.pem', 'utf-8')


const encryptionFile = fs.readFileSync('./encryption.txt', 'utf-8')
const signature = fs.readFileSync('./signature.txt', 'utf-8')

const verifier = crypto.createVerify('RSA-SHA256')
verifier.write(encryptionFile)
verifier.end()

const result = verifier.verify(alice_public_key, signature, 'base64')
console.log("Digital Signature: ", result)


const decryption = PrivateKeyOfBob.decrypt(encryptionFile, 'utf-8')
console.log("Decrypted Message: ", decryption)