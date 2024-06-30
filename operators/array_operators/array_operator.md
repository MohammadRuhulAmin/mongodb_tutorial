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

- **`$nin`**: used to match one or more elements that are not in the array

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

        db.getCollection('users')
        .find({
            marks:{$nin:[85,69]}
        });

        /** result will be shown id 2 and 3 */
    ```


- `$type`: operator is an element query operator in MongoDB that allows you to select documents based on data types of their fields. This can be useful when you want to perform operations only on those documents that have specific data types for certain fields.

    ```javascript
    db.products.find({ price: { $type: 'double' } });
    or, 
    db.products.find({ price: { $type: 1 } });
    ```
    Keep in mind that the $type operator will only match documents with the exact data type specified for the field. So, if the field has an integer value, using $type with Double will not match those documents.

    In summary, the $type element operator is a useful query tool for selecting documents based on the data types of their fields in MongoDB. By understanding and utilizing the BSON data types and aliases, you can effectively filter documents in your queries based on specific fields’ data types.