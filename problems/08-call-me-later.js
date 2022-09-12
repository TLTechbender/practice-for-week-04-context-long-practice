// Your code here





class CallCenter{
    constructor(name){
        this.name = name;
    }

    sayHello= ()=>{
     console.log(`Hello this is ${this.name}`)
        /*A return statement dosen't work here and I think I know why*/
    }
    callMeLater(delay){
        setTimeout(this.sayHello, delay);
}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/
let judy = new CallCenter("Judy");
judy.sayHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"

// Example 2:
 let melan = new CallCenter("Melan");
 melan.sayHello();        // prints "Hello this is Melan"
 melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"yHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"


try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}







