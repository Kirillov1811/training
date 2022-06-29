let arr = [];
for (let i = 1; i <= 100; i++){
  arr [i]= i;
  if ((i % 3 === 0) && (i % 5 === 0)){arr[i] = 'FIZZBUZZ ' + i;}
  else {
  
   if (i % 3 === 0){ arr[i] = 'FIZZ ' + i;}
   if (i % 5 === 0){arr[i] = 'BUZZ ' + i;}
 }
 console.log(arr[i]); 
}


   /*for (let i = 1; i <= 100; i++){

    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('fizzbuzz');
       }
   
       else if (i % 3 === 0) {
        
    console.log('fizz');
   }

   
   else if (i % 5 === 0){

    console.log('buzz');
   }
   
   
   else {
    console.log(i);
   }

 //  if ((i % 3 === 0) && (i % 5 === 0)){
 //       console.log('FIZZBUZZ');

  }*/