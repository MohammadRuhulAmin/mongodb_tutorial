## Aggregation continuation:

### $lookup
it is an left outer join

lets create 3 collections. products, customers and orders collection.

```javascript
// products collection
db.products.insertMany([
    { _id: ObjectId("60d5ec66b4ed06048426a1a1"), name: "Laptop", price: 1200 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a2"), name: "Smartphone", price: 800 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a3"), name: "Tablet", price: 500 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a4"), name: "Monitor", price: 300 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a5"), name: "Keyboard", price: 50 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a6"), name: "Mouse", price: 25 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a7"), name: "Printer", price: 150 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a8"), name: "Webcam", price: 80 },
    { _id: ObjectId("60d5ec66b4ed06048426a1a9"), name: "Headphones", price: 100 },
    { _id: ObjectId("60d5ec66b4ed06048426a1aa"), name: "Speakers", price: 200 }
]);


// customers collection
db.customers.insertMany([
    { _id: ObjectId("60d5ec66b4ed06048426a2a1"), name: "John Doe", email: "john@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a2"), name: "Jane Smith", email: "jane@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a3"), name: "Alice Johnson", email: "alice@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a4"), name: "Bob Brown", email: "bob@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a5"), name: "Charlie White", email: "charlie@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a6"), name: "Diana Black", email: "diana@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a7"), name: "Ethan Green", email: "ethan@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a8"), name: "Fiona Blue", email: "fiona@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2a9"), name: "George Yellow", email: "george@example.com" },
    { _id: ObjectId("60d5ec66b4ed06048426a2aa"), name: "Hannah Purple", email: "hannah@example.com" }
]);

//orders collection

db.orders.insertMany([
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a1"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a1"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a1"), quantity: 1 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a2"), quantity: 2 }
        ],
        order_date: ISODate("2023-07-08T10:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a2"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a2"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a3"), quantity: 3 }
        ],
        order_date: ISODate("2023-07-09T11:30:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a3"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a3"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a4"), quantity: 1 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a5"), quantity: 2 }
        ],
        order_date: ISODate("2023-07-10T12:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a4"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a4"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a6"), quantity: 3 }
        ],
        order_date: ISODate("2023-07-11T13:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a5"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a5"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a7"), quantity: 1 }
        ],
        order_date: ISODate("2023-07-12T14:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a6"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a6"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a8"), quantity: 2 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a9"), quantity: 1 }
        ],
        order_date: ISODate("2023-07-13T15:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a7"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a7"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1aa"), quantity: 1 }
        ],
        order_date: ISODate("2023-07-14T16:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a8"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a8"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a1"), quantity: 1 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a2"), quantity: 2 }
        ],
        order_date: ISODate("2023-07-15T17:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3a9"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2a9"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a3"), quantity: 3 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a4"), quantity: 1 }
        ],
        order_date: ISODate("2023-07-16T18:00:00Z")
    },
    {
        _id: ObjectId("60d5ec66b4ed06048426a3aa"),
        customer_id: ObjectId("60d5ec66b4ed06048426a2aa"),
        products: [
            { product_id: ObjectId("60d5ec66b4ed06048426a1a5"), quantity: 2 },
            { product_id: ObjectId("60d5ec66b4ed06048426a1a6"), quantity: 3 }
        ],
        order_date: ISODate("2023-07-17T19:00:00Z")
    }
]);


```


Now to get the details of every orders we can execute the following query:

```javascript
db.orders.aggregate([
    {
        $lookup: {
            from: "customers",
            localField: "customer_id",
            foreignField: "_id",
            as: "customer_details"
        }
    },
    {
        $unwind: "$customer_details"
    },
    {
        $lookup: {
            from: "products",
            localField: "products.product_id",
            foreignField: "_id",
            as: "product_details"
        }
    },
    {
        $project: {
            _id: 1,
            customer: "$customer_details",
            products: {
                $map: {
                    input: "$products",
                    as: "p",
                    in: {
                        quantity: "$$p.quantity",
                        product_info: {
                            $arrayElemAt: [
                                "$product_details",
                                { $indexOfArray: ["$product_details._id", "$$p.product_id"] }
                            ]
                        }
                    }
                }
            },
            order_date: 1
        }
    }
]).pretty();

```


lets execute simple query:

```javascript
db.getCollection('orders')
    .aggregate([
    {
        $lookup:{
            from:"customers",
            localField:"customer_id",
            foreignField:"_id",
            as:"author_details"
        }
    },
    {
        $project:{
            _id:0,
            customer_id:1,
            products:1,
            order_date:1,
            author_details:1
        }
    }

]);

```

another example:

```javascript
db.getCollection('orders').aggregate([
// stage 1
{
    $unwind:"$products"
},
// stage 2
{
    $lookup:{
        from:"products",
        localField:"products.product_id",
        foreignField:"_id",
        as:"product_information"

    }
},
// stage 3
{
    $unwind:"$product_information"
},
// stage 4
{
    $project:{
        _id:0,
        customer_id:0,
        "products.quantity":1,
        "products._id":0
        
    }
}

]);

```


 Inner join in using lookup and match operator:

 ```javascript
db.getCollection('orders').aggregate([
    // Stage 1: Lookup product details from the products collection
    {
        $lookup: {
            from: "products",
            localField: "products.product_id",
            foreignField: "_id",
            as: "product_information"
        }
    },
    // Stage 2: Unwind the products array
    {
        $unwind: "$products"
    },
    // Stage 3: Unwind the product_information array
    {
        $unwind: "$product_information"
    },
    // Stage 4: Lookup customer details from the customers collection
    {
        $lookup: {
            from: "customers",
            localField: "customer_id",
            foreignField: "_id",
            as: "customer_information"
        }
    },
    // Stage 5: Unwind the customer_information array
    {
        $unwind: "$customer_information"
    },
    // Stage 6: Filter out documents where the lookup did not produce results (inner join)
    {
        $match: {
            "product_information": { $ne: [] },
            "customer_information": { $ne: [] }
        }
    },
    // Stage 7: Project the desired fields
    {
        $project: {
            _id: 0,
            "customer_information._id": 1,
            "customer_information.name": 1,
            "customer_information.email": 1,
            "products.quantity": 1,
            "product_information._id": 1,
            "product_information.name": 1,
            "product_information.price": 1
        }
    }
]).pretty();

 ```