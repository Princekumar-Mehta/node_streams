import { got } from "got";
import http from "http";
import { Square } from "./squareTransform.js";


http
  .createServer((req, res) => {
    const square = new Square();
    res.writeHead(200,{"Content-Type":'text/text'})
    got.stream("http://localhost:8000/").pipe(square).pipe(res).on("error",()=>{
      console.log("error");
    });
  })
  .listen(8001);
