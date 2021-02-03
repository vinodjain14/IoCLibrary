"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_container_1 = require("./ioc-container");
class Dough {
    isDoughReady() {
        return true;
    }
}
class Toppings {
    isToppingsReady() {
        return true;
    }
}
class Pizza {
    constructor(_dough, _toppings) {
        this._dough = _dough;
        this._toppings = _toppings;
        this.pizzaReady = false;
    }
    makePizza() {
        this._dough.isDoughReady();
        this._toppings.isToppingsReady();
        if (this._dough.isDoughReady() && this._toppings.isToppingsReady()) {
            this.pizzaReady = true;
        }
    }
    isPizzaReady() {
        return this.pizzaReady;
    }
}
let container = ioc_container_1.IoCContainer.instance;
container.bindService("IDough", [], Dough);
container.bindService("IToppings", [], Toppings);
container.bindService("IPizza", ["IDough", "IToppings"], Pizza);
// let a = container.fetchService<IDough>("IDough");
// if(a.isDoughReady()) console.log("Yes, Dough is ready.");
// else console.log("Please wait, Dough is not ready yet.");
// let b = container.fetchService<IToppings>("IToppings");
// if(b.isToppingsReady()) console.log("Yes, Toppings are ready.");
// else console.log("Please wait, Toppings are not ready yet.");
let c = container.fetchService("IPizza");
c.makePizza();
if (c.isPizzaReady())
    console.log("Yeah, Pizza is ready222!!!");
else
    console.log("Please wait, Pizza is not ready yet.");
