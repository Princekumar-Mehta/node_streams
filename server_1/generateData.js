
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const writeStream = fs.createWriteStream(`${__dirname}/data/numbers.csv`);
const NUMBERS =1e8/2;
async function run(){for(let i=0;i<NUMBERS;i++){
    
   const overWatermark =writeStream.write(`${i},1\n`);
   if(!overWatermark){
    await new Promise((resolve,reject)=>{
        writeStream.once('drain',resolve);
    })
   }
}}
run();