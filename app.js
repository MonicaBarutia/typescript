// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
var person = {
    name: 'Monica',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
// person.role.push('admin');   // Not error, it doesn't work with push()
// person.role[1] = 10;     // Error
// person.role = [0, 'admin', 'user'];   // Error
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map());  // !! ERROR !!
}
