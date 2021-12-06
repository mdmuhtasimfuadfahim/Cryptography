const crypto = require('crypto')
const NodeRSA = require('node-rsa')
const fs = require('fs')

// Bob's Private key for decryption
const bob_private_key = fs.readFileSync('./keys/bobPrivateKey.pem', 'utf-8')
const PrivateKeyOfBob = new NodeRSA(bob_private_key)

// Alice's public key for signature verification
const PublicKeyOfAlice = fs.readFileSync('./keys/alicePublicKey.pem', 'utf-8')

const signature_file = fs.readFileSync('signature.txt', 'utf-8')
const encrypted_file = fs.readFileSync('encryption.txt', 'utf-8')
const doc_file = fs.readFileSync('sample-doc.txt')

// Verify the Signature 
const verifier = crypto.createVerify('RSA-SHA256')
verifier.write(doc_file)
verifier.end()

const verification_result = verifier.verify(PublicKeyOfAlice, signature_file, 'base64')
console.log("Digital Signature Verification: ", verification_result)

// Decryption of the String Message
const decrypted_message = PrivateKeyOfBob.decrypt(encrypted_file, 'utf8')
console.log("Decrypted String: ", decrypted_message)