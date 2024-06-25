
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

