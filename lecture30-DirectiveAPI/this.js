function Person() {
    this.fullName = "Francisco";
    this.fav = "Cookies";

    this.describe = function() {
        console.log("'this' is : ", this);
        console.log(this.fullName + " likes " + this.fav);
    };
}

var fco = new Person();
fco.describe();

var describe = fco.describe;
describe();
describe.call(fco);