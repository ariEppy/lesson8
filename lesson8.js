/* const hw8 = (firstName, lastName) => {
    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.textContent = firstName;
    p1.style.color = "red";
    p1.style.textDecoration = "underline";
    p2.textContent = lastName;
    p2.style.fontSize = "50px";
    p2.style.border = "1px solid black";

    div1.append(p1, p2);
    let body = document.body;
    body.append(div1);

};

hw8("ariela", "epstein"); */

/* let products = [
    {pName: "banana", pdesc: "yellow" , pPrice: 5},
    {pName: "tomato", pdesc: "red" , pPrice: 2},
    {pName: "pepper", pdesc: "green" , pPrice: 3},
    {pName: "strawberry", pdesc: "red" , pPrice: 15}
];

const find = (value) => {
    let container =  document.getElementById("results");
    container.textContent = "";
    products.forEach(element => {
        if(element.pPrice <= value)
        {
            //then show this product in the dom
            let divNew = document.createElement("div");
            let pNew = document.createElement("p");
            pNew.textContent = element.pName;
            let pNew2 = document.createElement("p");
            pNew2.textContent = element.pPrice;
            divNew.append(pNew, pNew2);
            container.append(divNew);
        }
    });
}; */

//classes
class Drive {
    constructor(carName, rideDate, km)
    {
        this.carName = carName;
        this.rideDate = rideDate;
        this.km = km;
    }
}

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.available = true;
        this.totalKM = 0;
        this.trips = [];
    }
    calcKM = () => {
        let sum = 0;
        for (const trip of this.trips) {
            sum += trip.km;
        }
        this.totalKilometers = sum;
    };
    addTrip = (trip) => {
        this.trips = [...this.trips, trip];
        this.totalKilometers += trip.km;
    };
    

}

class AllCars {
    constructor(cName)
    {
        this.cName = cName;
    }
    AllCars = [];

    addCar = (Car) => {
        this.AllCars = [...this.AllCars, Car];
    };

    highestKM = () => {
        let highest = this.AllCars[0];
        this.AllCars.forEach(element => {
            if(element.totalKM > highest.totalKM)
                highest = element; 
        });
        return highest;
    };
    availableCars = () => {
        this.AllCars.forEach(element => {
            if(element.available == true)
                console.log(element);
        });
    };

    lastMethod = (carName, drive) => {
        this.AllCars.forEach(val => {
            if(val.model == carName)
            {
                val.addTrip(drive);
                return;
            }
        })
    };

}