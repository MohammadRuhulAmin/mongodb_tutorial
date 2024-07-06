
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