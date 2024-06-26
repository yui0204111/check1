let numbers = [2,5,12,13,15,18,22];
function isEven(number){
    return number%2===0;
}
let num= numbers.filter(isEven);
console.log(num+'は偶数です');

class car{
    constructor(gas,numbe){
        this.gas=gas
        this.numbe=numbe
    }
    getNumGas(){
        console.log(`ガソリンは${this.gas}で、ナンバーは${this.numbe}です`)
    }
}
let getNumGas =new car(200,13);
getNumGas.getNumGas();