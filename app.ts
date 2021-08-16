// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];     // tuple
} = {
    name: 'Monica',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
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