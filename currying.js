var multiply=function(x,y){
    console.log(x*y);
};
var multiplyBytwo=multiply.bind(this,2);
multiplyBytwo(5);
var multiplyBythree=multiply.bind(this,3);
multiplyBythree(5);
var multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
};
var multiplyBytwo1=multiply1(2);
multiplyBytwo1(6);
var multiplyBythree1=multiply1(3);
multiplyBythree1(8);
