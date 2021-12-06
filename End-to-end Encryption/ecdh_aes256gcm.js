const { decrypt } = require('aes256')
const crypto = require('crypto')
// Galois /Counter Mode - Confidentiality, Integrity, Authenticity
// const aes256gcm 

const alice = crypto.createECDH('secp256k1')
const bob = crypto.createECDH('secp256k1')

bob.generateKeys()
alice.generateKeys()

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64')
const bobPublicKeyBase64 = bob.getPublicKey().toString('base64')

const aliceSharedKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex')
const bobSharedKey = bob.computeSecret(alicePublicKeyBase64, 'base64', 'hex')

// console.log(aliceSharedKey === bobSharedKey)
const message = "...Welcome to Basics of Blockchain Computaiton..."

const IV = crypto.randomBytes(16)
const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(aliceSharedKey, 'hex'), IV)

let encrypted = cipher.update( message, 'utf8', 'hex')
encrypted += cipher.final('hex')
const auth_tag = cipher.getAuthTag().toString('hex')


const payload = IV.toString('hex') + encrypted + auth_tag
const payloadBase64 = Buffer.from(payload, 'hex').toString('base64')
// console.log(payloadBase64)

console.table({
    IV: IV.toString('hex'),
    encrypted: encrypted,
    auth_tag: auth_tag,
})

console.log("payloadBase64: ", payloadBase64)

// Bob will do from here

const bob_payload = Buffer.from(payloadBase64, 'base64').toString('hex')
const bob_iv = bob_payload.substr(0, 32)
const bob_encrypted = bob_payload.substr(32, bob_payload.length - 32 -32)
const bob_authTag = bob_payload.substr(bob_payload.length - 32, 32)

console.log("\n" + "\n")
console.table({
    bob_iv: bob_iv,
    bob_encrypted: bob_encrypted,
    bob_authTag: bob_authTag
})
console.log("\n" + "\n")

try{

    const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(bobSharedKey, 'hex'), Buffer.from(bob_iv, 'hex'))
    decipher.setAuthTag(Buffer.from(bob_authTag, 'hex'))
    let decrypted = decipher.update(bob_encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    console.log("Decrypted message: ", decrypted)
}catch(error){
    console.log(error.message)
}