"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
const accountingCopy = { name: 'Dummy', describe: accounting.describe };
accountingCopy.describe();
