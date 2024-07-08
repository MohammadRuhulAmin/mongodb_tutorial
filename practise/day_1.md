**Find the maximum age from the collection:**

collection: user_info
```javascript

    db.collection.insertMany([
        { "_id": 1, "name": "Alice", "age": 30 },
        { "_id": 2, "name": "Bob", "age": 25 },
        { "_id": 3, "name": "Charlie", "age": 35 },
        { "_id": 4, "name": "David", "age": 40 },
        { "_id": 5, "name": "Eve", "age": 20 }
    ]);

```

```javascript
db.getCollection('user_info')
.aggregate([
    {
        $group:{
            _id:null,
            maxAge:{
                $max:"$age" 
                /** $avg will return average
                 *  $sum will return the summation of all ages
                 *  $min:"$age" will return the min age
                 */
            }
        }
        
    },
    {
        $project:{
            _id:0,
            maxAge:1
        }
    }
])
```

Find the second highest age from the collection 

```javascript
    db.user_info.aggregate([
        {
            $sort: { age: -1 }
        },
        {
            $skip: 1
        },
        {
            $limit: 1
        },
        {
            $project: { _id: 0, age: 1 }
        }
    ]);

```