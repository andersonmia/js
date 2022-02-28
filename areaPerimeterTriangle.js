function area(base,height,hypotenuse){
   let areaT = (base*height)/2;
   console.log (`The area of the triangle is: ${areaT}`);
}
function perimeter(base,height,hypotenuse){
   let aSq = base*base;
   let bSq = height*height;
   let cSq = hypotenuse*hypotenuse;

   let perT;
   if(aSq+bSq==cSq){
        perT = (base + height + hypotenuse);
        console.log("The perimeter of the triangle is: " + perT);
    
   }else{
       perT = (base + (hypotenuse*2));
       console.log("The perimeter of the triangle is: " + perT);
    

   }
}
area(3,4,5);
perimeter(3,8,5);

