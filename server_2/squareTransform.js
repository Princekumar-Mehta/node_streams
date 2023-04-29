import { Transform } from "stream";
import { formatData } from "./utils/formatData.js";
export class Square extends Transform {
    constructor() {
      super();
      this.remaining ="";
    }
    _transform(chunk, encoding, callback) {
     let {str,remaining} = formatData(chunk,this.remaining);
     this.remaining=remaining;
      let numbers = str.split(",");
       let squares = numbers.map((number) => {
        if (/^\d+$/.test(number))
          return number+" : "+(parseInt(number) * parseInt(number)).toString()+"\n";
      });
      this.push(squares.join(""));
      callback();
    }
    _flush(callback) {

      //if something is remaining , it will be processed here
      if(this.remaining.length>0){
        let numbers = this.remaining.split(",");
       let squares = numbers.map((number) => {
        if (/^\d+$/.test(number))
          return number+" : "+(parseInt(number) * parseInt(number)).toString()+"\n";
      });
      this.push(squares.join(""));
      }

      this.push("done");
      callback();
    }
  }