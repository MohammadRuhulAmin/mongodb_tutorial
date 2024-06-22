/**
 * An embedded document, also known as a subdocument, 
 * is a document stored within another document in MongoDB. 
 * This structure allows you to organize related data together in a single document,
 * which can improve read performance and data locality.
 * To see the information of a nested object we use:
 * {
  "_id": ObjectId("60a6743e8c88f22b9cdb59b6"),
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}

 * {"company.title":"SHEPARD"}
 * {"company.location.address":"379 Tabor Court"}
 */


/**Find all data where country: USA */

var get_usa_data = db.getCollection('persons').find({
    "company.location.country":"USA",
    "company.title":"OVOLO"
});