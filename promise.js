var p=new Promise((resolve, reject)=>{
    var x=false;
    if(x){
        resolve("it is true");
    }
    else{
        reject("It is false");
    }
});
p.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
});