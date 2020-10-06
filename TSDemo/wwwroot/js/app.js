function trip(car) {
    console.log('Welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('Finished with the trip');
}
function testtrip() {
    var honda = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving.');
        }
    };
    var schwin = {
        model: 'abc',
        color: 'Black',
        wheelsize: 30
    };
    var chevy = {
        model: 'Trax',
        color: 'Blue',
        drive: function () {
            console.log('Chevy is driving');
        }
    };
    trip(honda);
    trip(chevy);
    var carshop = [
        honda
    ];
    carshop.push(chevy);
    //carshop.push(schwin);   -- Can't push a schwin into the list
    for (var _i = 0, carshop_1 = carshop; _i < carshop_1.length; _i++) {
        var car = carshop_1[_i];
        console.log(car.model);
    }
}
//# sourceMappingURL=app.js.map