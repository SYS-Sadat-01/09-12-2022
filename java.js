function say(){
    return 'hello'
}
console.log(say());

let myFunc = ()=>{
    console.log('Hello from arrow function')
}
myFunc()

hello = (par)=> 12 + par
console.log(hello(11))


sum = (a,b) => 'sum of A + B ' + (a + b);
console.log(sum(4,3))



class car {
    constructor(name,  model){
        this.theName = name;
        this.theModel = model;

    }
}


let cObj = new car('Corolla', 2013)
let cObj2 = new car('Israil', 30)


console.log(cObj.theName)
console.log(cObj.theModel)

console.log(cObj2.theName)
console.log(cObj2.theModel)