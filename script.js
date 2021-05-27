 // Even Numbers (for)
for(var i = 0; i<=50;i=i+2){
    console.log(i);
}
 // Even Numbers (while)
var x = 0;
while(x<=50){
    console.log(x);
    x=x+2;
}
// ASCII Art
for(var i = "$"; i<="$$$$$$"; i= i + "$"){
    console.log(i);
}
//fizzbuzz
for(var i = 1; i<=100;i++){
    if(i%3 === 0 & i%5 === 0){
        console.log("fizzBuzz");
        }
    else if(i%3 === 0){
        console.log("fizz");    
    } 
   else  if(i%5 === 0){
        console.log("buzz");      
    }
    else{
        console.log(i);
    }
}
