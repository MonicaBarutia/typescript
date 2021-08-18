// const names: Array<string> = []; // string[]
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000)
// });

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Max'}, {age:30});
const mergedObj2 = merge({name: 'Max', hobbies: ['Sports']}, {age:30});
console.log(mergedObj.name);