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

enum Role { ADMIN , READ_ONLY, AUTHOR};     // pot sa aiba si alte valori gen: ADMIN = 5, READ_ONLY = 'READ_ONLY

const person = {
    name: 'Monica',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');   // Not error, it doesn't work with push()
// person.role[1] = 10;     // Error
// person.role = [0, 'admin', 'user'];   // Error

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map());  // !! ERROR !!
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}