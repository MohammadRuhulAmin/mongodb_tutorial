

### Collection Type:

1. #### `Capped Collection: `
    Capped collections are fixed-size collections that insert and retrieve documents based on insertion order. Capped collections work similarly to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.

    **To create a collection with specific options:**

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

    **To check a collection is capped:**
    ```javascript
    db.nonCappedCollection_name.isCapped() // Return false
    db.cappedCollection_name.isCapped() // Return true
    ```

    **To convert a collection to capped collection by using: convertToCapped()**

    ```javascript
        db.runCommand( {
            convertToCapped: "non_capped_collection_name",
            size: 100000
        });
    ```
    _The most common use case for a capped collection is to store log information. When the capped collection reaches its maximum size, old log entries are automatically overwritten with new entries._

2. #### `NonCapped Collection: `

    non-capped collections in MongoDB provide flexibility in data storage by allowing collections to grow dynamically without size constraints. They are suitable for scenarios where the amount of data stored is expected to increase over time, and where efficient indexing and querying capabilities are required.