function * gen(){
    
    yield 100;
    yield 200;

}
var a=gen();
console.log(a.next().value);
console.log(a.next());
console.log(a.next().done);
