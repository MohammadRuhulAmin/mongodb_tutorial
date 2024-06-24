### Delete Methods:
MongoDB provides the following methods to delete documents of a collection:

- `db.collection.deleteOne()`
    Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.

- `db.collection.deleteMany()`
    Delete all documents that match a specified filter.

- `db.collection.remove()`
    Delete a single document or all documents that match a specified filter.