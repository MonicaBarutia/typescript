// const names: Array<string> = []; // string[]
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000)
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Max'}, {age:30});
const mergedObj2 = merge({name: 'Max', hobbies: ['Sports']}, {age:30});
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText ];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Max'}, 'name');