## MongoDB Collection Creation

###  Implicite Creation:

To create a collection in MongoDB, use the following command:

```javascript
    db.createCollection('users');

```

### Explicite Creation: 

To create a collection with specific options:

```javascript
    db.createCollection('users', { 
        capped: true, 
        size: 100000,
        max: 5000 
    });
    /*
    The following example creates a capped collection called users with a maximum size of 100,000 bytes.
    */
```

### When to use capped collection ?
The most common use case for a capped collection is to store log information. When the capped collection reaches its maximum size, old log entries are automatically overwritten with new entries.

Capped collections are fixed-size collections that insert and retrieve documents based on insertion order. Capped collections work similarly to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.