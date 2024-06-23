/**
 * 
 * To insert a single record: 
 * Syntax: db.users.insertOne({ name: 'John Doe', age: 30, email: 'john@example.com' });
 */

/** Insert a response:  */

var insert_resp = db.users.insertOne({
    name: 'John Doe', 
    age: 30, 
    email: 'john@example.com'
});