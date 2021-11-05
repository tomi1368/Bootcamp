var arr1 = [1,2,3,4,5,7];
var arr2 = [1,1,1,1,1,1];
var r = [];

for(i = 0; i < arr1.length; i++){
  r[i] =arr1[i]+arr2[i];
}

console.log(r);