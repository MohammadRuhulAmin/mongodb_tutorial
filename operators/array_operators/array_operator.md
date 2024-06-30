### Array operators:
`$in`, `$nin` , `$all`, `$elemMatch`, `$size`

- **`$elemMatch`** : is used to match one or more array elements that satisfy the given query condition(s). It returns the documents where the array field has at least one matching element.


```javascript
    { 
    "_id": 1,
    "name": "Alice",
    "scores": [ 75, 82, 95 ]
    }
    { 
    "_id": 2,
    "name": "Bob",
    "scores": [ 65, 88, 72 ]
    }
    { 
    "_id": 3,
    "name": "Charlie",
    "scores": [ 80, 85, 90 ]
    }
  /** Query:  */
    db.marks.find({
        scores:{$elemMatch:{$gte:80,$lte:90}}
    });
```