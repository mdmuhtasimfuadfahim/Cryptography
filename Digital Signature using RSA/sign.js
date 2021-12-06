const crypto = require('crypto')
const fs = require('fs')

const private_key = fs.readFileSync('./keys/privateKey.pem', 'utf-8')

const doc = fs.readFileSync('sample-doc.txt')

const signer = crypto.createSign('RSA-SHA256')
signer.write(doc)
signer.end()

const signature = signer.sign(private_key, 'base64')
console.log("Digital Signature: ", signature)

fs.writeFileSync('signature.txt', signature)