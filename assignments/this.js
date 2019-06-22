/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding : the value of 'this' will be the window/console object, when in the global scope
* 2. Implicit Binding: the object left of the dot gets "this"
* 3. Explicit Binding: when the call and/or apply method is used. 
* 4. New Binding: used with a constructor
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function animal(animal_name){
    console.log(this);
    return animal_name;
}
animal('Elephant');
// Principle 2

// code example for Implicit Binding
const zoo = {
    all: 'Creatures',
    lion: function(call){
        console.log(`${this.all} run and hide when the king ${call}`);
        console.log(this);
    }
};
zoo.lion('Rooooooars!');
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
function announce () {
    console.log(this.name);
}

var north_remembers = {
    name:'The King in the North, whose name is Stark.'
}
announce.call(north_remembers);