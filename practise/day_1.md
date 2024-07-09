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


Find the distinct age from persons table:

```javascript
    db.getCollection('persons').aggregate([
        {
            $group:{_id:"$age"}
        },
        {
            $project:{
                different_age:"$_id",
                _id :0
            }
        },
        {
            $sort:{different_age:1}
        }

    ]);
```

Display current date:
```javascript
db.getCollection('persons').aggregate([
    {
        $addFields:{
            currentDate:{$toDate:"$$NOW"}
        }
    },
    {
        $project:{
            current_time_stamp:"$currentDate",
            _id:0
        }
    },
    {
        $limit:1
    }
]);

```

Find the distinct fruit list and add this is delecious fruit before ever fruit name

```javascript
db.getCollection('persons')
.aggregate([
    // stage1:
    {
        $group:{
            _id:"$favoriteFruit",
        }
    },
    {
       
       $project:{
        fruit_name:{
            $concat:["This ","$_id", " is very delicious"]
        },
        _id:0
       }
    },
    {
        $project:{
            message:"$fruit_name"
        }
    }
]);
```

```javascript
db.getCollection('persons')
.aggregate([
    // stage1:
    {
        $group:{
            _id:"$favoriteFruit",
        }
    },
    {
       
       $project:{
        fruit_name:{
            $concat:["This ","$_id", " is very delicious"]
        },
        _id:0
       }
    },
    {
        $project:{
            message:"$fruit_name"
        }
    }
]);

```


Join two tables: orders and products collection

```javascript
db.getCollection('orders')
.aggregate([
    {
        $lookup:{
            from:'products',
            localField:'products.product_id',
            foreignField:'_id',
            as:'product_info'
        }
    },
    {
        $project:{
            "product_info":0
        }
    }
]);

```

```javascript
db.orders.aggregate([
{
    $lookup:{
        from:"products",
        localField:"product_id",
        foreignField:"_id",
        as:"prod_details"
    }
},
{
    $lookup:{
        from:"customers",
        localField:"customer_id",
        foreignField:"_id",
        as:"cust_details"
    }
},
{
    $project:{
        order_id:"$_id",
        quantity:1,
        order_date:1,
        "prod_details.name":1,
        "prod_details.price":1,
        "cust_details.name":1,
        "cust_details.email":1
    }
}

]);

```