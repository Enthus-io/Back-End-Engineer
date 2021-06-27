let menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        set setAppetizers(appetizers) {
            this._appetizers = appetizers;
        },
        set setMains(mains) {
            this._mains = mains;
        },
        set setDesserts(desserts) {
            this._desserts = deserts;
        },
        get getAppetizers() {
            return this._appetizers;
        },
        get getMains() {
            return this._mains;
        },
        get getDesserts() {
            return this._desserts;
        }
    },
    get getCourses() {
        return {
            appetizers: this._courses._appetizers,
            mains: this._courses._mains,
            desserts: this._courses._desserts
        }
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {

        if (courseName === 'appetizer') {
            this._courses._appetizers.push({
                dish: {
                    name: dishName,
                    price: dishPrice
                }
            })
        }
        else if (courseName === 'main') {
            this._courses._mains.push({
                dish: {
                    name: dishName,
                    price: dishPrice
                }
            })
        }
        else if (courseName === 'dessert') {
            this._courses._desserts.push({
                dish: {
                    name: dishName,
                    price: dishPrice
                }
            })
        }
        else {
            console.log('Invalid emtry.')
        }
    },
    getRandomDishFromCourse: function (courseName) {
        return this._courses[`_${courseName}`][Math.floor(Math.random() * this._courses[`_${courseName}`].length)];
    }
}


//console.log(menu);menu.addDishToCourse('appetizer', 'eman', 10);

menu.addDishToCourse('appetizer', 'cheese dip', 1.99);
menu.addDishToCourse('appetizer', 'chips', 2.99);


menu.addDishToCourse('main', 'tacos', 8.99);
menu.addDishToCourse('main', 'sopes', 9.99);
menu.addDishToCourse('main', 'enchiladas', 10.99);


menu.addDishToCourse('dessert', 'flan', 3.99);
menu.addDishToCourse('dessert', 'fruta', 4.99);


console.log(menu.getCourses);

console.log(menu.getRandomDishFromCourse('mains'));