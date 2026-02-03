/**
 * ähnlich den Extended Interfaces
 * Kombination von TypeAliases (keine echte Erweiterung)
 */

type User = {
  name: string;
  age: number;
  courses: string[];
}

type UserSex = {
  sex: string;
};

type UserExtended = User & UserSex;

const user1: UserExtended = {
  name: "Jan",
  age: 27,
  courses: ['C', 'C++', 'JavaScript'],
  sex: 'male',
}

console.log(user1);

const user2: UserExtended = {
  name: 'Sabine',
  age: 24,
  courses: ['PHP', 'C#'],
  sex: 'female',
}

console.log(user2);