const number_taken = document.getElementById("binary") ; 
const decimal_number = document.getElementById("") ; 
let puiss = number_taken.length-1 ; 
var arr = [] ; 
var arr2 = [] ; 


() => {
  for (i=0; i<number_taken.length; i++){
    mod  = number_taken % 10 ; 
  // modulo push it in an Array 
      arr.push(mod) ; 
    quo = number_taken/10 ; 
    number_taken = quo ;
  } 
    return arr ; 
}

// start sorting elements with multiply every element with pow(2,puiss) with addition 
    // and puiss = puiss -1  ; 
(arr) => { 
  for(i=0;i<arr.length;i++){
    mul = Math.pow(2,puiss) ; 
    produit = arr[i]*mul ;
    arr2.push(produit) ;
    puiss = puiss-1 ; 
}
return arr2 ;
}


 (arr2) => { 
  for(i=0;i<arr2.length;i++){
    return arr2[i]+arr2[i+1] ; 
}
}

