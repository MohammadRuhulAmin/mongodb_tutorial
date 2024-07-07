
## Aggregation in MongoDB
MongoDB Aggregation framework provides a way to process and transform data that is stored in our MongoDB collections. It allows you to perform calculations and return the calculated results using various data aggregation tools such as aggregation pipelines, map-reduce functions, or single-purpose aggregation methods.

## Aggregation Pipeline

The aggregation pipeline is a framework in MongoDB that enables the developers to execute a series of data transformations on the documents in a collection. The pipeline consists of multiple stages, and each stage applies a specific operation on the input documents. Among these operations, you can find features like `filtering, sorting, projecting, and grouping`.

```javascript
db.getCollection('persons').aggregate([
    {
        $match:{
            age:{$gt:25},
            age:{$lt:30}
        }
    },
    {
        $sort:{age:-1}
    }
])

```
## Single-purpose Aggregation
MongoDB also supports single-purpose aggregation methods, such as db.collection.count(), db.collection.distinct(), and db.collection.group() etc. These methods offer a faster and more convenient way to perform simple aggregations directly.

Example of db.collection.count():

```javascript
db.collection.count({ status: 'A' });
db.customers.distinct("country")
db.orders.distinct("status", { amount: { $gt: 100 } })
db.products.distinct("category", { in_stock: true })
db.users.distinct("address.city")
db.collection.group();

```

MongoDB Aggregation is a powerful feature that helps you extract, manipulate and aggregate data from your collections. By using aggregation pipelines, map-reduce functions or single-purpose aggregation methods, you can perform various data analysis tasks efficiently on your MongoDB dataset.

Lets learn distinct(),count(),group() more

- Aggregation Method : distinct()
    
  Syntax:
  ```javascript
    db.getCollection('persons')
    .distinct(<field>,<query>,<options>)
  ```
  Example:
  ```javascript
    db.getCollection('orders')
    .distinct("status", // field name
        {
            amount:{$gt:100} // query
        },
        {
            collation:{
                locale:"en", // options
                strength:2
            } // - We use a collation option to ensure case-insensitive comparison.
        }
    )
  ```

## Common Operators

- **`$match`**, **`$group`**, **`$sort`**, **`$project`**, **`$skip`**, **`$limit`**,
 **`$unwind`**, **`$lookup`**, **`$sum`**



 - **`$match`**: The $match operator in MongoDB Query Language (MQL) is used to filter documents in a collection based on specified criteria. It is commonly used in the aggregation pipeline to filter documents before passing them to the next stage of the pipeline.


```javascript
db.getCollection('users').aggregate([{
    $match:{
        age:{$gt:25},
        age:{$lt:30}
    }
}]);
```