import { IoCContainer } from "./ioc-container";

interface IDough {
    isDoughReady(): boolean;
}

interface IToppings {
    isToppingsReady(): boolean;
}

interface IPizza {
    isPizzaReady(): boolean;
    makePizza(): void;
}

class Dough implements IDough {
    isDoughReady(): boolean {
        return true;
    }
}

class Toppings implements IToppings {
    isToppingsReady(): boolean {
        return true;
    }
}

class Pizza implements IPizza {

    constructor(private _dough: IDough, private _toppings: IToppings) {}
    private pizzaReady: boolean = false;

    makePizza(): void {
        this._dough.isDoughReady();
        this._toppings.isToppingsReady();

        if(this._dough.isDoughReady() && this._toppings.isToppingsReady()) {
            this.pizzaReady = true;
        }
    }

    isPizzaReady(): boolean {
        return this.pizzaReady;
    }
}

let container = IoCContainer.instance;
container.bindService("IDough", [], Dough);
container.bindService("IToppings", [], Toppings);
container.bindService("IPizza", ["IDough", "IToppings"], Pizza);

// let a = container.fetchService<IDough>("IDough");
// if(a.isDoughReady()) console.log("Yes, Dough is ready.");
// else console.log("Please wait, Dough is not ready yet.");

// let b = container.fetchService<IToppings>("IToppings");
// if(b.isToppingsReady()) console.log("Yes, Toppings are ready.");
// else console.log("Please wait, Toppings are not ready yet.");

let c = container.fetchService<IPizza>("IPizza");
c.makePizza();
if(c.isPizzaReady()) console.log("Yeah, Pizza is ready!!!");
else console.log("Please wait, Pizza is not ready yet.");