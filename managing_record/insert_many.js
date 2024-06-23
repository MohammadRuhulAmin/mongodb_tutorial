/**
 * To insert Multiple records at a time: insertMany()
 * 
 */

db.users.insertMany([
    { name: 'Jane Doe', age: 28, email: 'jane@example.com' },
    { name: 'Mary Jane', age: 32, email: 'mary@example.com' },
]);