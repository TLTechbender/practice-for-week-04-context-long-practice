// Your code here
class Dog{
    constructor(name){
        this.name = name;
    }

    static makeJet(){
        const jet = new Dog("Jet");
    return jet;
    }

    changeName(newName){
        this.name = newName;
    }
    speak(word){
     return `${this.name} says ${word}`;
    }
}
/* I needed some tiny help for this, but I ended up learning more*/
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
