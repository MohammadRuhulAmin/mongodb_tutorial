
### Select All Docuemnt:
Using find() method we can select a specific document.

To get all the records: `find({})`

Example:
```javascript
// This syntax is commonly used in the MongoDB shell 
db.getCollection('users').find({});

//retrieves the "users" collection from the current database 
db.collection('users').find({});

//directly accesses the "users" collection from the current database
db.users.find({});

```

### Select Single Document:

**Syntax**:

```javascript
db.getCollection('collection_name')
.find({
    'field_name':'value'
});

```

### Select operators :

- `$eq`  = equal
- `$gt`  = greater than 
- `$lt`  = less than
- `$ne`  = not equal
- `$gte` = greater than or equal
- `$lte` = less than or equal


**Operator $eq**: 

To select those documents where field = value;

```sql
select * from users where emp_type= "Officer";

```

Similarly We can write:

```javascript

db.getCollection('users').find({
    emp_type:{$eq:"Officer"}
});

```


Again, If we want to get only female and age : 24

```sql
select * from users where gender = "female"
and age = 24;
```

Similar Mongo Query Language:

```javascript
db.getCollection('persons').find({
    age :{$eq:20},
    gender:{$eq:"female"}
    
});

```

**Operator $gt:** 

We want to select data where age > 24

```sql
SELECT * FROM users WHERE age > 24;
```

Similarly,

```javascript

db.getCollection('users').find({
    age: {$gt:24}
});

```

We want to select data where age > 24 and gender  = female
and eyeColor = green

```sql
SELECT * FROM users 
WHERE age > 24 
and gender = "female"
and eyeColor = "green";
```

similarly,

```javascript
    db.users.find({
        age:{$gt:24},
        gender:"female", /** ',' creates the invisible and operator */
        eyeColor:"green"
    });
```


**Operator $lt**: 

Lets find data age between 23 and 29

```sql
select * from users where age between 23 and 29 
and gender = "female";
```

Here to find the range, we will use both $gt and $lt operator.

```javascript
db.users.find({
    age:{$gt:23},
    age:{$lt:29},
    gender:"female"

});

```

**Operators $gte and $lte** :

To find data of age  >= 23 and age <= 29

```javascript
db.users.find({
    age:{$gte:23},
    age:{$lte:29}

});

```

