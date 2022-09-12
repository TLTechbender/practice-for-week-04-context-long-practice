// Your code here
const Calculator = require("./02-calculator");
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/
class FancyCalculator extends Calculator{
    setTotal(newTotal){
     this.total = newTotal;
        return newTotal;
    }

    modulo(num){
      /*Doing it this way dosen't seem to work at all*/ //return this.total % num;
    this.total %=num;
        return this.total;

    }
    squared(){
    // return Math.pow(this.total,this.total);
/* The test file was not working at all*/
    this.total **=2;
        return this.total;
    }
}
try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

 console.log(fancyCalculator.add(9))       // => 10
