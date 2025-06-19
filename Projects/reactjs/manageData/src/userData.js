// generateData.js
import { faker } from '@faker-js/faker';

const generateFakeUsers = (count = 1000) => {
 const users = [];
 for (let i = 1; i <= count; i++) {
  users.push({
   id: i,
   name: faker.person.fullName(),
   age: faker.number.int({ min: 18, max: 60 }),
   city: faker.location.city(),
   email: faker.internet.email(),
   phone: faker.phone.number(),
   status: faker.helpers.arrayElement(["Active", "Inactive"]),
  });
 }
 return users;
};

// Export the generated data or the function
const fakeData = generateFakeUsers();
export default fakeData;

// or if you want to export the function instead
// export { generateFakeUsers };
