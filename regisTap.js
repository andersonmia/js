
function coder(word){
    let coordinates = [];
    let a,b;
    let alphabet = [["a","b","c","d","e"],["f","g","h","i","j"],["l","m","n","o","p"],["q","r","s","t","u"],["v","w","x","y","z"]];
    //looping throught the word to find coordinates
    for(m=0;m<word.length;m++){
      for(i=0;i<alphabet.length;i++){
         for(x=0;x<alphabet[i].length;x++){
            if(word[m]==alphabet[i][x]){
                a = i+1;
                b = x+1;
            }
        }
       }
    //creating 2D coordinates
      coordinates.push(a+""+b);
      }
      console.log(coordinates);
      
      let output = "";
      let dots;
      for(d=0;d<coordinates.length;d++){
        for(e=0;e<coordinates[d].length;e++){
          dots  = parseInt(coordinates[d][e]);
    
          //printing dots
          for(s=0;s<dots;s++){
            output = output + "."; 
          }
          output = output + " "; 
        }
      }
      console.log("The dot codes for " + word + " are: "+ output);
    }
    //                                     HOW IT WORKS / MAP
                                       
    //                                       1  2  3  4  5
    
    //                                  1    a  b  c  d  e
    //                                  2    f  g  j  h  i
    //                                  3    j  l  m  n  o
    //                                  4    p  q  r  s  t
    //                                  5    u  w  x  y  z  
    
    coder("mia");