/**
 * 
 * To create a collection with specific options:
 * 
 */

var specic_options = db.createCollection('users', { capped: true, size: 100000, max: 5000 });