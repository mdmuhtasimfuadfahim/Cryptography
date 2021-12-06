const fs = require('fs')
const { runMain } = require('module')
const qrcode = require('qrcode')


const signature = fs.readFileSync('signature.txt', 'utf-8')

run().catch(error => console.log(error.stack))

async function run(){
    const result = await qrcode.toDataURL(signature)

    fs.writeFileSync('./qr.html', `<img src="${result}`)
    console.log("Wrote to ./qr.html")
}