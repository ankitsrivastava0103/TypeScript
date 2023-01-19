"use strict";
const person = {
    name: "Ankit",
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
let favActivity; // Telling JS that we will be storing string array.
favActivity = ["Sports"];
// let favoriteActivity: any[];
// favoriteActivity = ['Sports', 1]
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=obj-enum-array-any.js.map