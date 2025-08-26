function test(){
    let a = '3';
    let b = '4';

    let c = a;
    let a = b;
    let b = c;

    console.log("A is: " + a);
    console.log("B is: " + b);
};

test();