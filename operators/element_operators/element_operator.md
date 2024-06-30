### Element Operators:
Element operators in MongoDB are used to query documents based on the presence, type, or absence of a field and its value. These operators offer a flexible approach to querying the data and allow you to manipulate elements at a granular level.Here’s a brief summary of different element operators available in MongoDB.

`$exist`, `$type`, `$regex`

- **`$exist`** : used to check if a field exists in documents within a collection

    ```javascript
    db.getCollection('users')
    .find({
        fieldName:{$exist:true} /** or, $exist: false */
    });

    ```
    This query returns documents where fieldName exists.

    ```javascript
    [
        { "name": "Alice", "age": 25 },
        { "name": "Bob" },
        { "name": "Charlie", "age": 30 }
    ]

    db.users.find({ age: { $exists: true } })
    /** result */ 
    [
        { "name": "Alice", "age": 25 },
        { "name": "Charlie", "age": 30 }
    ]

    db.getCollection('users')
    .find({
        age:{$exist:false}
    });

    /** result */

    { "name": "Bob" }



    ```