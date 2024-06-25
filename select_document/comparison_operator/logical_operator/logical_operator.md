### Logical Operators : 
**`$and`** , **`$or`**, **`$not`**, **`$nor`**

The `$and` operator is a logical operator in MongoDB that allows you to combine multiple query statements and returns a result only when all of those conditions are met. With `$and`, you can join together as many query conditions as necessary.

**Operator $and:** 

Logically combines multiple conditions. Resulting documents must match ALL conditions.
**Syntax:**

```javascript
 {
      $and:[
          {<condition1>},
         {<condition2>},
          .......
     ]
 }
```

```javascript

db.getCollection('users')
.find({
    name:"Ruhul",
    email:"ruhulamin.cs.dev@gmail.com"
});

```
using $and operator:

```javascript
db.users.find({
    $and:[
        name:"Ruhul",
        email:"ruhulamin.cs.dev@gmail.com"
    ]

});
```

**Operator $or:**
The `$or` operator in MongoDB is a logical operator that allows you to perform queries on multiple fields, and return documents that satisfy any of the specified conditions. It is useful when you need to filter data based on one or more criteria.

`Syntax`: 

```javascript

{
  $or: [
    { condition1 },
    { condition2 },
    // ...,
    { conditionN },
  ];
}

```

Find documents price is less then 20 or price greater than 25 or age = 25: 

```javascript
db.products.find({
    $or:[
        price:{$lt:20},
        prict:{$gt:25},
        age:25
    ]

});


```

The result will include the documents that match the specified conditions.Use it wisely in conjunction with other operators to get the most out of your MongoDB queries.