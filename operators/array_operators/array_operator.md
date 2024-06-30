### Array operators:
`$in`, `$nin` , `$all`, `$elemMatch`, `$size`, `$push`, `$addToSet`

- **`$elemMatch`** : is used to match one or more array elements that satisfy the given query condition(s). It returns the documents where the array field has at least one matching element.


    ```javascript
        [{ 
            "_id": 1,
            "name": "Alice",
            "scores": [ 75, 82, 95 ]
        },
        { 
            "_id": 2,
            "name": "Bob",
            "scores": [ 65, 88, 72 ]
        },
        { 
            "_id": 3,
            "name": "Charlie",
            "scores": [ 80, 85, 90 ]
        }]
    /** Query:  */
        db.marks.find({
            scores:{$elemMatch:{$gte:80,$lte:90}}
        });
    ```

- **`$all`** : is used to match arrays that contain all the specified query elements. It returns documents where the array field has all the given
elements.

    ```javascript
    db.getCollection('users')
    .find({
        tags: {
            $all:['mongo','database']
        }
    });
    ```
    This query returns all documents where the tags array contains both "mongo" and "database"


- **`$size`** : is used to match arrays that have the specified number of elements. It returns documents where the array field has the given size.

    ```javascript
        db.getCollection('users')
        .find({
            comments: {$size}
        });
    ```

- **`$addToSet`** : used to add unique values to an array field. If the value doesn’t exist in the array, it will be added; otherwise, the array remains unchanged.

    ```javascript
        db.getCollection('users')
        .updateOne({ _id: 1 }, 
        { $addToSet: { colors: 'green' } }
        );
    ```
    This query adds “green” to the colors array in the document with _id equal to 1, only if it’s not already present