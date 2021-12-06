const crypto = require('crypto')
const fs = require('fs')

const public_key = fs.readFileSync('./keys/publicKey.pem', 'utf-8')

const signature = fs.readFileSync('signature.txt', 'utf-8')
const doc = fs.readFileSync('sample-doc.txt')

const verifier = crypto.createVerify('RSA-SHA256')
verifier.write(doc)
verifier.end()

const result = verifier.verify(public_key, signature, 'base64')
console.log("Digital Signature Verification: ", result)