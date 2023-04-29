export const  formatData=(chunk,remaining)=>{
    // as data comes in chunks it can destore the numbers
   // so we have used reamining variable to store reamainig data which
   // will be merged with reaminig part as and when next chunk arrives
   let str = remaining.toString()+chunk.toString();
   remaining="";
   let lastIndex= str.lastIndexOf(",");
   remaining = str.substring(lastIndex);
   str = str.substring(0,lastIndex);
   console.log(str+" "+remaining);
   return {str,remaining};
 }