const person: {
  name: string;
  age: number;
  hobbies: string[]
  role: [number, string]
} = {
  name: "Ankit",
  age: 25,
  hobbies : ['Sports', 'Cooking'],
  role: [2,'author']
};

let favActivity : string[]; // Telling JS that we will be storing string array.
favActivity = ["Sports"];

// let favoriteActivity: any[];
// favoriteActivity = ['Sports', 1]

console.log(person.name);

for( const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}
