/**
 * Interfaces erweiterbar machen
 */

interface User {
  name: string;
  age: number;
  courses: string[];
}

interface UserExtended extends User {
  permissionLevel: string;
}

const user1: UserExtended = {
  name: "Jan",
  age: 27,
  courses: ['C', 'C++', 'JavaScript'],
  permissionLevel: 'Instructor',
}

console.log(user1);

const user2: UserExtended = {
  name: 'Daniel',
  age: 24,
  courses: ['PHP', 'C#'],
  permissionLevel: 'Student',
}

console.log(user2);