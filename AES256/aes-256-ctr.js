var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3fequee92hd';


function encrypt(text){
    var cipher = crypto.createCipher(algorithm, password);
    var encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm, password);
    var decrypted = decipher.update(text, 'hex',  'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var message = encrypt("Welcome to the Basics of Blockchain Computation")
console.log("encrypted message: ", message)

var decryptedMessage = decrypt(message)
console.log("decrypted message: ", decryptedMessage)