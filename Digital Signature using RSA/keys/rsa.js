const NodeRSA = require('node-rsa')
const key = new NodeRSA({b: 2048})

var public_key = key.exportKey('public')
var private_key = key.exportKey('private')

console.log("Public Key: ", public_key)
console.log("Private Key: ", private_key)