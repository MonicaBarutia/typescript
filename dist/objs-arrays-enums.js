"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];     // tuple
// } = {
//     name: 'Monica',
//     age: 25,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // pot sa aiba si alte valori gen: ADMIN = 5, READ_ONLY = 'READ_ONLY
const person = {
    name: 'Monica',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin');   // Not error, it doesn't work with push()
// person.role[1] = 10;     // Error
// person.role = [0, 'admin', 'user'];   // Error
let favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map());  // !! ERROR !!
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
