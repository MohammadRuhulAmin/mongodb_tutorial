
## Projection Operator:

Projection operators in MongoDB control which fields should be shown in the results. 

### `$`, `$elemMatch`, `$slice`, `$meta` , `$include`, `$exclude`

- `$` The (positional) $ operator limits the contents of an <array> to return the first element that matches the query condition on the array.

    For an instance, 

    collection : students

    ```javascript
        {
        "_id": 1,
        "name": "Alice",
        "grades": [
            {"course": "Math", "score": 85},
            {"course": "English", "score": 90},
            {"course": "Science", "score": 88}
        ]
        },
        {
        "_id": 2,
        "name": "Bob",
        "grades": [
            {"course": "Math", "score": 75},
            {"course": "English", "score": 80},
            {"course": "Science", "score": 82}
        ]
        }


    ```

    Suppose you want to find the first grade that Alice received for the course "Science." You can use the positional $ operator to achieve this.

    ```javascript
        db.students.find(
            {"name":"Alice","grades.course":"Science"},
            {"grades.$":1}  /** here 1 is fixed  */   
        );

    ```

    Results:

    ```javascript
        {
            "_id": 1,
            "grades": [
                {"course": "Science", "score": 88}
            ]
        }

    ```

    - `#elemMatch` operator matches documents in a collection that contain an array field
    with atleast one element that satisfies multiple given conditions.

    `Syntax`:

    ```javascript
    {
        <field>:{
            $elemMatch:{
                <query1>,
                <query2>,
                ....
            }
        }
    }
    ```

    Example:
    Sample Dataset:
    ```javascript
        {
        "_id": 1,
        "name": "Alice",
        "subjects": [
            { "score": 85, "type": "exam", "age": 25 },
            { "score": 90, "type": "quiz", "age": 26 },
            { "score": 78, "type": "assignment", "age": 28 }
        ]
        },
        {
        "_id": 2,
        "name": "Bob",
        "subjects": [
            { "score": 75, "type": "exam", "age": 27 },
            { "score": 82, "type": "exam", "age": 26 },
            { "score": 89, "type": "quiz", "age": 29 }
        ]
        }


    ```

    ```javascript
        db.getCollection('students')
        .find({
            subjects:{
                $elemMatch:{
                    score:{$gte:80},
                    type:'exam',
                    age:{$gt:24},
                    age:{$lt:29}
                    /** age:{$gt:24, $lt:29} also applicable */

                }
            }
        });

    ```

- `$slice` Operator is used to limit the number of elements projected from an array. It can be either
return the first N elements, skip the first N elements or return elements after skipping N elements.

    Syntax: 

    ```javascript
    { <field>: { $slice: <num_elements> } }
    
    { <field>: { $slice: [ <skip_count>, <num_elements> ] } }

    db.collection.find(
        { <query conditions> },
        { <arrayField>: { $slice: count | [skip, limit] } }
    );

    ```

    Example1 :

    ```javascript
        {
        "_id": 1,
        "name": "Alice",
        "grades": [85, 90, 78, 88, 92]
        },
        {
        "_id": 2,
        "name": "Bob",
        "grades": [75, 82, 89, 94, 67]
        }


        db.collection.find({},{name:1,grades:{$slice: 3 }});

        result: 

        [
            {
                "_id": 1,
                "name": "Alice",
                "grades": [85, 90, 78]
            },
            {
                "_id": 2,
                "name": "Bob",
                "grades": [75, 82, 89]
            }
        ]

    ```

Example2: 

```javascript
    db.students.find(
        {
            $and:[
                name:"Alice",
                _id:1 
            ]
        },
        {
            grades:{
                $slice: [2,2]
            }
        }
    )

```

- `$include` : This projection operator is used in queries to specify the fields that should be returned in the result documents. By using $include, you can choose to retrieve only fields of interest, making your query more efficient by minimizing the amount of data returned.

```javascript
    db.users.find({},{title: 1, author: 1, _id: 0});

    // result:

    [
        {
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
        },
        {
            title: 'Of Mice and Men',
            author: 'John Steinbeck',
        },
    ];

```


- `$exclude`: Now, let’s say we want to fetch all the students but exclude the age field from the result


    ```javascript
        db.persons.aggregate([
        {
            $project: {
            age: 0,
            name: 0
            },
        },
        ]);
    // age and name will not be displayed
    ```


    **Note: You cannot use the exclude operator (0) for a field that is explicitly included with the include operator (1) in the same document, except for the _id field. The _id field is the only field that can have both exclude (0) and include (1) options in the same document.**