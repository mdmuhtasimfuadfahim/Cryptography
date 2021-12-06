var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    ENCRYPTION_KEY = '3zTvzr3p67VC61jmV54rIYu1545x4TlYueeu298397sbabdYsh',
    IV_LENGTH = 4;

function encrypt(text) {
	let iv = crypto.randomBytes(IV_LENGTH);
	let cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return iv.toString('hex') + ':' + encrypted.toString('hex');
}

var a = encrypt('Welcome to the Basics of Blockchain Computation')
console.log(a)