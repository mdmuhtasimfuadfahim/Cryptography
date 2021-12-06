var crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    password = "3zTvzr3p67VC61jmV54rIYu1545x4TlY",
    // don't use global iv for production. generate a new one for each encryption
    iv = '60iP0h6vJoEa';

// function for encryption operation 
function encrypt(text){
    var cipher = crypto.createCipheriv(algorithm, password, iv)
    var encrypted = cipher.update(text, 'utf8', 'base64')
    encrypted += cipher.final('base64')
    var tag = cipher.getAuthTag();
    return {
        content: encrypted,
        tag: tag
    };
}


// function for decryption operation
function decrypt(encrypted){
    var decipher = crypto.createDecipheriv(algorithm, password, iv)
    decipher.setAuthTag(encrypted.tag)
    var decrypted = decipher.update(encrypted.content, 'base64', 'utf8')
    decrypted += decipher.final('utf8')
    return {
        content: decrypted,
        tag: encrypted.tag
    };
}

var message = encrypt("Welcome to the Basics of Blockchain Computation")


var decryptedMessage = decrypt(message)
console.table({ 
    Encrypted_auth_tag: message.tag,
    Decrypted_auth_tag: decryptedMessage.tag
})

console.table({
    Message: message.content,
    Decrypted_message: decryptedMessage.content
})