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
```