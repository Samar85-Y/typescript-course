/**
 * * gibt es nur in TS
 * Enum: Liste mit mehreren Vorgaben von Konstanten
 * 
 */

enum PermissionaLevel {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
}

interface User {
  name: string,
  age: number,
  courses: string[]
};

interface UserExtended extends User {
  permissionaLevel: PermissionaLevel;
};

const user1: UserExtended = {
  name: "Jan",
  age: 27,
  courses: ['C', 'C++', 'JavaScript'],
  permissionaLevel: PermissionaLevel.ADMIN,
};

console.log(user1);

const user2: UserExtended = {
  name: 'Daniel',
  age: 24,
  courses: ['PHP', 'C#'],
  permissionaLevel: PermissionaLevel.INSTRUCTOR,
};

console.log(user2);