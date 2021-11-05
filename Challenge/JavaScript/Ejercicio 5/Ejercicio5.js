var1 = [1,2,4,6,7,8];
var2 = [1,2,4,5,6,7,8];
var3 = var1.concat(var2);

var3.sort(function(a, b){return a - b});
console.log(var3);