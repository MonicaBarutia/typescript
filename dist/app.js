"use strict";
var _a;
const e1 = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Schwarz');
result.split(' ');
const fetchedUSerData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own compaany' }
};
console.log((_a = fetchedUSerData === null || fetchedUSerData === void 0 ? void 0 : fetchedUSerData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
// type UnknownEmployee = Employee | Admin;
//
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start date: ' + emp.startDate);
//   }
// }
//
// printEmployeeInformation(e1);
//
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }
//
// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//
//   loadCargo(amount: number) {
//     console.log('Loading cargo ' + amount);
//   }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car();
// const v2 = new Truck();
//
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
//
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
//
// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }
//
// useVehicle(v1);
// useVehicle(v2);
//
// type Animal = Bird | Horse;
//
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving with speed: ' + speed)
// }
//
// moveAnimal({type: 'bird', flyingSpeed: 10})
//
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
// userInputElement.value = 'Hi there!';
//
// interface ErrorContainer {  // {email: 'Not a valid email!', username: 'Must start with a character!'}
//   [prop: string]: string;
// }
//
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital letter!'
// };
