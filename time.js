
function timing(){
    let d=new Date();
    let time1=d.toLocaleTimeString();
   
    console.log(time1);
    setTimeout(timing,2000);
}

timing();
