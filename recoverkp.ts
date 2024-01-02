import * as fs from 'fs';

const bs58 = require('bs58')

const pk = 'your-private-key-here'
const uint8bytes = bs58.decode(pk);

const bytelist : number[] =[]
for (let byte of uint8bytes){
    bytelist.push(byte);
}

fs.writeFile("keypair.json", JSON.stringify(bytelist), (err) => {
    if (err) { console.error(err); return; };
    console.log("Key Pair file is created! Powered by Seguro Devs");

});
