
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
  
/**
 * 
 *     db.createCollection:
        This command creates a new collection in MongoDB.
        In this example, the collection name is "users".

    validator:
        This is a parameter that specifies the validation rules for the collection. 
        The validation rules ensure that documents inserted or updated in the collection adhere to the specified schema.

    $jsonSchema:
        This keyword specifies that the validation rules are written in JSON Schema format.
        JSON Schema is a standard for defining the structure of JSON data.

    bsonType:
        This specifies the BSON (Binary JSON) data type of the field.
        Common types include "object", "string", "int", "bool", etc.

    required:
        This is an array that lists the fields that must be present in the document.
        In this example, ["name", "age", "email"] means these fields are mandatory.

    properties:
        This defines the validation rules for each field in the document.

Field Validation Rules

    name:
        bsonType: "string": The name field must be a string.
        description: A textual description of the rule, not used for validation but helpful for documentation.

    age:
        bsonType: "int": The age field must be an integer.
        minimum: 0: The minimum value for age is 0.
        maximum: 120: The maximum value for age is 120.
        description: A textual description of the rule.

    email:
        bsonType: "string": The email field must be a string.
        pattern: "^.+@.+$": The email field must match this regular expression pattern. This pattern ensures that the email has at least one character before and after the @ symbol.
        description: A textual description of the rule.
 */

