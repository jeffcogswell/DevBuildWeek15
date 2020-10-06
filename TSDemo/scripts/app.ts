interface Car {
    model: String,
    color: String,
    drive(): void
}

function trip(car: Car) {
    console.log('Welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('Finished with the trip');
}

function testtrip() {
    let honda: Car  = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving.');
        }
    };

    let schwin = {
        model: 'abc',
        color: 'Black',
        wheelsize: 30
    };

    let chevy: Car = {
        model: 'Trax',
        color: 'Blue',
        drive: function () {
            console.log('Chevy is driving');
        }
    };

    trip(honda);
    trip(chevy);

    let carshop: Car[] = [
        honda,
        {
            model: 'Toyota',
            color: 'Red',
            drive: function () {
                console.log('Toyota is driving');
            }
        },
        {
            model: 'Hyundai',
            color: 'Silver',
            drive: function () {
                console.log('Hyundai is driving');
            }
        }
    ];

    carshop.push(chevy);
    //carshop.push(schwin);   -- Can't push a schwin into the list

    for (let car of carshop) {
        console.log(car.model);
    }
}
