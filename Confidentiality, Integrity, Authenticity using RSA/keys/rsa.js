const NodeRSA = require('node-rsa')

const key = new NodeRSA({b: 2048})

const PrivateKey = key.exportKey('private')
const PublicKey = key.exportKey('public')


console.log("Public_key: ", PublicKey)
console.log("Private_key: ", PrivateKey)