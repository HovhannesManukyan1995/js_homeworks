var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName, userSurname) {
        this.name = userName;
        this.surname = userSurname;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, company) {
        var _this = _super.call(this, name, surname) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " ").concat(this.surname, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    return Employee;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, surname, company, pashton) {
        var _this = _super.call(this, name, surname, company) || this;
        _this.manager = pashton;
        _this.myArray = ["John Smith", "Ara Gexecik", "Jason Voorhees"];
        return _this;
    }
    Manager.prototype.show = function () {
        console.log("Hello I am ".concat(this.name, " ").concat(this.surname, " and I am  ").concat(this.manager, " in company ").concat(this.company));
        console.log("Here is my workers list-- ".concat(this.myArray.join()));
    };
    Manager.prototype.hire = function (worker) {
        this.myArray.push(worker);
        console.log("I hire new employee, his name is ".concat(worker, " and my workers list now is --- ").concat(this.myArray));
    };
    Manager.prototype.fire = function (worker) {
        var index = this.myArray.indexOf(worker);
        if (index < 0) {
            console.log("We dont have employee with name ".concat(worker, "  to fire"));
        }
        else {
            var removed = this.myArray.splice(index, 1);
            console.log("I fire employee, his name is ".concat(worker, " and my workers list now is --- ").concat(this.myArray));
        }
    };
    return Manager;
}(Employee));
var bob = new Manager("John", "Smith", "Apple", "CIO");
bob.show();
bob.hire("Jimmi Jones");
bob.fire("Jimmi Jone");
