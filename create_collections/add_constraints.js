
/** To add constraints in a specific field for a collection we can follow the below example: */


db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "age", "email"],
        properties: {
          name: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          age: {
            bsonType: "int",
            minimum: 0,
            maximum: 120,
            description: "must be an integer between 0 and 120 and is required"
          },
          email: {
            bsonType: "string",
            pattern: "^.+@.+$",
            description: "must be a valid email address and is required"
          }
        }
      }
    }
  });
  