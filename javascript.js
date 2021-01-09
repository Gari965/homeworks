let arr = [1,"10","Hi",2,3];
let a = 0;
let b = 0;
 for (let i = 0; i< arr.length; i++){
   if( Number.isInteger(arr[i])) {
  a=a +1
 } 
   else{
    b=b+1
  }
}
 console.log(a,b)
 