// const person = ({ name: string, age: number } = {
//   name: 'Caro',
//   age: 23,
// });

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Caro',
//   age: 23,
//   hobbies: ['coding', 'skipping'],
//   role: [7, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}

const person = {
  name: 'Caro',
  age: 23,
  hobbies: ['coding', 'skipping'],
  role: 0,
};

//person.role.push('Admin');
//person.role[1] = 10;

let favouriteActivities: string[];
(favouriteActivities = []), console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === 0) {
  console.log(person.name);
}
