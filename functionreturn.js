function f1(){
    return new Promise(function(x,y){
        let n=5;
        if(n%2===0){x("even");}
        else{y("odd");}
    });
}
console.log(f1());