## MongoDB Collection Creation

###  Implicite Creation:

To create a collection in MongoDB, use the following command:

```javascript
    db.createCollection('users');

```

### Explicite Creation: 

To create a collection with specific options:

```javascript
    db.createCollection('users', { 
        capped: true, 
        size: 100000,
        max: 5000 
    });
    /*
    The following example creates a capped collection called users with a maximum size of 100,000 bytes.
    */
```

### When to use capped collection ?
_The most common use case for a capped collection is to store log information. When the capped collection reaches its maximum size, old log entries are automatically overwritten with new entries._

Capped collections are fixed-size collections that insert and retrieve documents based on insertion order. Capped collections work similarly to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.



### Add constrains to a collection

```javascript
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

```

## MongoDB Collection Creation with Validation Rules

### `db.createCollection`
This command creates a new collection in MongoDB. In this example, the collection name is "users".

### `validator`
This is a parameter that specifies the validation rules for the collection. The rules ensure that documents inserted or updated adhere to the specified schema.

### `$jsonSchema`
Specifies that the validation rules are written in JSON Schema format, which defines the structure of JSON data.

### Field Validation Rules

#### `name`
- `bsonType`: "string"
- `description`: A textual description of the rule, not used for validation but helpful for documentation.

#### `age`
- `bsonType`: "int"
- `minimum`: 0 (The minimum value for age is 0.)
- `maximum`: 120 (The maximum value for age is 120.)
- `description`: A textual description of the rule.

#### `email`
- `bsonType`: "string"
- `pattern`: "^.+@.+$" (Ensures the email matches this regex pattern, validating its format.)
- `description`: A textual description of the rule.

#### `required`
An array listing fields that must be present in the document. In this example, `["name", "age", "email"]` means these fields are mandatory.

#### `properties`
Defines the validation rules for each field in the document.
