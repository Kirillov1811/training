let white = '     ';
let black = '#';
let a = '';
let b = '';
let c = 4;
let d = 0;
//let x = ''; 
    
   if (c % 2 == 0){
    for (i = 1; i <= c/2; i++){
        
        a = a + white + black;  
        b = b + black + white;
    }
    //console.log(a); 
    
    for (j = 1; j <= c/2; j++){
        
        
        console.log(a);
        console.log(b);
        //console.log('');
     }
    
   }
else {
    for (n = 1; n  <= c/2; n++){
        a = a + (white + black);  
        b = b + black + white;
        
    }
  
    //console.log(a + white);
    //console.log(b + black);
    for (m = 1; m <= c/2; m++){
        
        
        console.log(a + white);
        console.log(b + black);

        //console.log('');
     }
console.log(a + white)
}

