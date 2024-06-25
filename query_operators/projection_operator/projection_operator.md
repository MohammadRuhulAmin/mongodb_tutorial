
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