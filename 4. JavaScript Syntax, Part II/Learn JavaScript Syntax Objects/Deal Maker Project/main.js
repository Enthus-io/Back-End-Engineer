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
        return Object.entries(this._courses);
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
        } else if (courseName === 'dessert') {
            this._courses._desserts.push({
                dish: {
                    name: dishName,
                    price: dishPrice
                }
            })
        }
    }
}


//console.log(menu);menu.addDishToCourse('appetizer', 'eman', 10);

menu.addDishToCourse('appetizer', 'reziteppa', 1);

menu.addDishToCourse('main', 'niam', 2);


menu.addDishToCourse('dessert', 'tressed', 3);



menu.addDishToCourse('dessert', 'tressed', 33);


let keyValues = menu.getCourses;
console.log(keyValues);




console.log(menu._courses._appetizers);

console.log(menu._courses._mains);

console.log(menu._courses._desserts);


  //6, 9, 10, 11, 12, 13





