function nuevostring(v){
    let letra1 = v.charAt(0);
    let letra2 = v.charAt(1);
    let letra3 = v.charAt(2);
    let letra4 = v.charAt(v.length-1);
    let letra5 = v.charAt(v.length-2);
    let letra6 = v.charAt(v.length-3);

    let string = letra1+letra2+letra3+letra6+letra5+letra4;

    return console.log(string);
}

let str = "Qweasdfgrty";

let = nuevostring(str);