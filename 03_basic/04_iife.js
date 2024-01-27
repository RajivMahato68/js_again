// Immediately Invoked function Expressions (IIFE)


(function chai(){

    //named IIFe
    console.log(`DB connected`);
 })();   
         // remove global scope population use iife this question important for interview


         ((name) =>{
            // simple IIFE
    console.log(`DB connected ${name}`);
 })('rajiv')          