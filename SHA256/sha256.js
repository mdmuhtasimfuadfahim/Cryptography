const crypto = require('crypto')
const SHA256 = require('sha256')


var message = "Welcome to the Basics of Blockchain Computaiton"

const hashUsingCrypto = crypto.createHash('sha256').update(message).digest('hex')
const hashUsingSHA256 = SHA256(message)



const fs = require('fs')
const fileBuffer = fs.readFileSync('./file.txt')
console.log(SHA256(fileBuffer))
const ObejctHash = require('object-hash')


const GetTimeStamp = new Date()

const date = ("0" + GetTimeStamp.getDate()).slice(-2)
const month = ("0" + (GetTimeStamp.getMonth() + 1)).slice(-2)
const year = GetTimeStamp.getFullYear()
const hours = GetTimeStamp.getHours()
const minutes = GetTimeStamp.getMinutes()
const seconds = GetTimeStamp.getSeconds()
const milliSeconds = GetTimeStamp.getMilliseconds()


const TimeStamp = (year + "." + month + "." + date + " " + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds)
const nonce = crypto.randomBytes(16).toString('hex')
const object_hash = ObejctHash("This is the transaciton of previous block")

const HASH = crypto.createHash('sha256')
            .update(object_hash, TimeStamp, nonce, message)
            .digest('hex')

console.table({
    SHA256_Hash: hashUsingSHA256,
    Crypto_Hash: hashUsingCrypto,
    HASH: HASH
})
