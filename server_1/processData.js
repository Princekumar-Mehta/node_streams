import { Duplex } from "stream";
import { formatData } from "./utils/formatData.js";
export class Process extends Duplex {
    constructor(ms) {
      super();
      this.delay = ms;
      this.remaining="";
    }
    _read() {}
  
    _write(chunk, encoding, callback) {
  
        let {str,remaining} = formatData(chunk,this.remaining);
        this.remaining=remaining;
      this.push(str);
      setTimeout(callback, this.delay);
    }
  
    _final(callback) {
      
        //if something is remaining , it will be processed here
        if(this.remaining.length>0){
        
        this.push(this.remaining);
        }
        
      callback(null);
      this.push(null);
    }
  }
  