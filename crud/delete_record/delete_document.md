### Delete Methods:
MongoDB provides the following methods to delete documents of a collection:

- `db.collection.deleteOne()`
    Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.

- `db.collection.deleteMany()`
    Delete all documents that match a specified filter.

- `db.collection.remove()`
    Delete a single document or all documents that match a specified filter.

### Additional Mathods: 

- `findOneAndDelete()`:
    method in MongoDB is used to find a single document matching the query and delete it. It also returns the deleted document.provides a sort option. The option allows for the deletion of the first document sorted by the specified order.

    ```javascript
    db.getCollection('persons').findOneAndDelete({ name: "Jane Doe" });

    ```

- `findAndModify()`:
    provides a sort option. The option allows for the deletion of the first document sorted by the specified order.

    ### `Syntax`:
    ```javascript
    db.collection.findAndModify({
        query: <document>,
        sort: <document>,
        new: <boolean>,
        fields: <document>,
        upsert: <boolean>
    });
    ```

    ### `Example`:
    ```javascript
        db.users.findAndModify({
            query: { email: "johndoe@example.com" },  // Find the document with this email
            update: { $inc: { age: 1 } },             // Increment the age by 1
            new: true,                                // Return the modified document
            upsert: false                             // Do not insert if the document does not exist
        });

    ```