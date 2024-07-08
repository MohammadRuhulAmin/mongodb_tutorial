
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

 - **`sort:`** is an aggregation operator in MongoDB that shorts the documents that are passed through the pipeline. It takes one or more fields as parameters and sorts the documents in ascending or desending order based on the values in the specified fields.
 
    ```javascript 
        $sort:{
            field1:<sort_order>,
            field2:<sort_order>,
            ....
        }
    ```

   The `<sort_order>` parameter can be either 1 or -1, which corresponds to ascending or descending order, respectively.

    Example:
    ```javascript
    db.students.aggregation([
        $sort:{
            age:-1,
            name:1
        }
    ]);
    ```
    This will sort the documents by the age field in descending order and then by the name field in ascending order.

    It’s important to note that the $sort operator can be an expensive operation, especially if sorting large datasets. So it’s recommended to use it towards the end of a pipeline to minimize the number of documents being sorted.


 - 

 - **`group`**: 
   
   Syntax:
   ```javascript
    db.getCollection('collection_name')
    .aggregate([
        $group:{
            _id: expression,
            fieldN:{
                accumulatorN:expressionN
            }
        }
    ]);
   ```

   Which country has the highest number of registered users?
   ```javascript
    db.getCollection('collection_name')
    .aggregate([
        // first pipeline
        $group:{
            _id: "$company.location.country",
            userCount:{
                $sum:1
            }
        },
        // second pipeline
        $sort:{
            userCount:-1
        },
        // third pipeline
        {$limit:2}
    ])
   ```

   list the top 5 most common favorite fruits among users.
   ```javascript
    db.getCollection('markets')
    .aggregate([
        $group:{
            _id:$fruit_item,
            totalCount:{
                $sum:1
            }
        },
        $sort:{
            totalCount:-1
        },
        {limit:5}
    ]);
   ```

   Lets get the distinct gender and total number of each gender list from a collection:

    ```javascript
        db.getCollection('persons').aggregate([
        {
            $group: {
                _id: "$gender",
                count: { $sum: 1 }
            }
        }
        ]);

    ```


 - **`$match`**: The $match operator in MongoDB Query Language (MQL) is used to filter documents in a collection based on specified criteria. It is commonly used in the aggregation pipeline to filter documents before passing them to the next stage of the pipeline.


    ```javascript
    db.getCollection('users').aggregate([{
        $match:{
            age:{$gt:25},
            age:{$lt:30}
        },
        {
            $count:'middle_age'
        }
    }]);
    ```

 - [MongoDB Aggregation Pipeline youtube tutorials](https://www.youtube.com/watch?v=SUZKhBvxW5c&list=PLRAV69dS1uWQ6CZCehxKy0rjkqhQ2Z88t)


 - **`$project`:** 
    To get the specific fields for the collection we use `$project` operator.

    Syntax:
    ```javascript
    db.getCollection('collection_name')
    .aggregate([
        // stage :1 or pipeline 1
        {$project:{<field_name_1>:1,<field_name_2>:1,<field_name_n>:}}
    ]);
    ```

    Example :1
    i want to display isActive,gender,eyeColor and age from persions collection.
    ```javascript
    db.getCollection('persons')
    .aggregate([
        {
            // stage: 1, or pipeline : 1
            $project:{
                _id:0, // will not be displayed
                isActive:1,
                gender:1,
                eyeColor:1,
                age:1
            }
        }
    ]);

    ```

    Example :2
    i don't want to display isActive,gender,eyeColor and age from persions collection.
    ```javascript
    db.getCollection('persons')
    .aggregate([
        {
            // stage: 1, or pipeline : 1
            $project:{
                _id:0, // will not be displayed
                isActive:0,
                gender:0,
                eyeColor:0,
                age:0
            }
        }
    ]);

    // rest of the columns will be displayed

    ```
    


 - [Aggregation youtube tutorials](https://www.youtube.com/watch?v=A3jvoE0jGdE&list=PLWkguCWKqN9OwcbdYm4nUIXnA2IoXX0LI)