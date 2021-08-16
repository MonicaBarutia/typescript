// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
const person = {
    name: 'Monica',
    age: 25,
    hobbies: ['sports', 'cooking']
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map());  // !! ERROR !!
}