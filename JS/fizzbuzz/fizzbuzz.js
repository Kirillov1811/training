let y = 0;


let arr = [];
//for (let i = 1; i <= 100; i++){
  /*  arr [i]= i;
   // console.log(arr[i]);

  if ((i % 3 === 0) && (i % 5 === 0)){
    arr[i] = 'FIZZBUZZ';
  }
  //else {
  
   if (i % 3 === 0){
    arr[i] = 'FIZZ';
    
    //console.log('FIZZ');
   }
   if (i % 5 === 0){
    arr[i] = 'BUZZ';

  // }
  }




   console.log(arr[i]); */



   for (let i = 1; i <= 100; i++){

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

 //  }
   
}
