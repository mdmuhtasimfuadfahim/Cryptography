const NodeRSA = require('node-rsa')

// const key = new NodeRSA({b:1024})
let secret = "Welcome to Basics of Blockchain Computation"

// var public_key = key.exportKey('public')
// var private_key = key.exportKey('private')

// console.log(public_key + "\n" + private_key)

var public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwGoscQH+5mFs+o46lRClp4prB\n' +
'0arSwf0w32wnYy9iUf65dBOyBFaRomoolJcCcYvpqRgQggxswLW/0bKAuWOj8yhq\n' +
'JDOfoyQG+1fqq6S/DYjgwc6dQdxnhQ/3nKFZoid4Jplnl7+xiYtW+Y1bIx+YArsD\n' +
'EOEItkxuv+MEKdtRLQIDAQAB\n' +
'-----END PUBLIC KEY-----';

var private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXQIBAAKBgQCwGoscQH+5mFs+o46lRClp4prB0arSwf0w32wnYy9iUf65dBOy\n' +
'BFaRomoolJcCcYvpqRgQggxswLW/0bKAuWOj8yhqJDOfoyQG+1fqq6S/DYjgwc6d\n' +
'QdxnhQ/3nKFZoid4Jplnl7+xiYtW+Y1bIx+YArsDEOEItkxuv+MEKdtRLQIDAQAB\n' +
'AoGAYgqFA/eMpEEEG31nPu8Rt1dnHRyjY66ITRs11T/M84n+rDTJekQcBfxL6ce/\n' +
'wqaAZFe1hAtC65DmHqKaJDwSEho0Lf+wmdmLeTb35WL+/K1YXhQfucXQGa9JYURf\n' +
'srjtJPXTZ9iEqdTZEoGxxrfg1qvHLOkJEzx/W57P4Rq5WMECQQDVG2z23yzdW2iQ\n' +
'NjZKfwkNYO1+zMJWW7eEIfFUOXSgLeOI4YEVeOjoSXAmrLCUoSEFy+deF1eEsdxm\n' +
'N/vZ1S8JAkEA04x5sNrbhrmgYUXZvhVzAXtZ4UjKpShBp3adoMqiss2L5Rm9QMgt\n' +
'ceBdROC/XqGc8T7r/EcSuX45ge6Arnm2BQJAMMTj/OM6CzZeCZK+ffHwimVCNKB7\n' +
'YPQAXXa/Gb1EWVvnFG428kkHVBFqXw9qIbl2KzNssXW6C54AiEwLkOBesQJBAJZT\n' +
'Gh4sRxajTW4R3rqOL1z8NFA8E5Ps2UqQpU4e8CIyoZg5BBzGolRrZJuPQS2Tlhxv\n' +
'4+0u7AVXxrGns1VIM6kCQQDF7Zc5MaS85FQEhSE5VXsYEdrJVa7SpDYRFMV4UYqm\n' +
'fmascvZpvGBhPqIR3dIILU5R+rOKckzKG9bazJzbSh3c\n' +
'-----END RSA PRIVATE KEY-----';

let key_private = new NodeRSA(private_key)
let key_public = new NodeRSA(public_key)

// Public key for encryption 
const encryptedString = key_public.encrypt(secret, 'base64')
console.log("Encrypted string: ", encryptedString)


// Private key for decryption
const decrptedString = key_private.decrypt(encryptedString, 'utf8')
console.log("Decrypted string: ", decrptedString)


