const crypto = require('crypto')
const secret = "ThisIsMySecret"
const logger = require('./winston')
const obejctHash = require('object-hash')
const SHA256 = require('sha256')
const { v4: uuid } = require('uuid')

const dataOfDate = new Date()

let date = ("0" + dataOfDate.getDate()).slice(-2)
let month = ("0" + (dataOfDate.getMonth() + 1)).slice(-2)
let year = dataOfDate.getFullYear()
let hours = dataOfDate.getHours()
let minutes = dataOfDate.getMinutes()
let seconds = dataOfDate.getSeconds()
let milliSeconds = dataOfDate.getMilliseconds()

const timestamp = (year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds)

let nonce = crypto.randomBytes(16).toString('hex')

// const uniqueUUID = uuid()
// logger.log('info', 'This is my message')


// File hashing
const fs = require('fs')
const fileBuffer = fs.readFileSync("./file.txt")
const previousBlockHash = obejctHash("this is my previous block hash")
const message = "This is the transaciton of present block"

const createHashUsingSHA256 = crypto.createHash('sha256').update(message, previousBlockHash, nonce, timestamp).digest('hex')


// text hashing
const hash = crypto.createHash('sha256', secret).update("This is the data for Hash operation").digest('base64');

// console.log("SHA256: ", createHashUsingSHA256)
// console.log("Obejct Hash: ", createHashUsingObjectHash)


console.table({
    timestamp: timestamp,
    nonce: nonce,
    previousBlockHash: previousBlockHash,
    message: message,
    Hash: createHashUsingSHA256
})
