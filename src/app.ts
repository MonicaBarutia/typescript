class Department {
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, private name: string) {
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(report: string) {
        this.reports.push(report)
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Max']);
console.log(it);

it.describe();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe}
// accountingCopy.describe();

it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...')
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();


