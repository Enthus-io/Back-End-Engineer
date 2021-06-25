// The this keyword references the calling object which provides access to the calling object’s properties.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: function () {
        console.log(this);
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot.provideInfo());

// Arrow function have its own bindings to this or super
const robot2 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: () => {
        console.log(this);
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot2.provideInfo());

const robot3 = {
    model: '1E78V2',
    energyLevel: 100
};

robot3.provideInfo = function () {
    console.log(this);
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
}

console.log(robot3);

console.log(robot3.provideInfo());