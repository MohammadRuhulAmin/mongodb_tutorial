
## Projection Operator:

Projection operators in MongoDB control which fields should be shown in the results. 

### `$`, `$elemMatch`, `$slice`, `$meta`

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