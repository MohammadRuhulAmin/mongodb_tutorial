## MapReduce (Map --> Reduce --> Query)

Map-reduce is a data processing paradigm for condensing large volumnes of data into useful aggregated results.

Map: is a javascript function that maps a value with a key and 
emits (produces) a key-value pair. 

reduce: is a javascript function that reduces or groups all the documents having the same key.

out: Specifices the location of the map-reduce query result.


Syntax:
```javascript
// map
    db.collection.mapReduce(
        function(){
            emit(key,value)
        }, 
// reduce function
        function(key,values){return reducFunction}, 
        {out:collection}
    )
```

considering a collection, order.

```javascript
[
    {
        "_id": ObjectId("66222333abcd"),
        "custid": 1,
        "name": "ruhul",
        "product": "Laptop",
        "price": 1234
    },
    {
        "_id": ObjectId("66222333abce"),
        "custid": 1,
        "name": "ruhul",
        "product": "Mouse",
        "price": 25
    },
    {
        "_id": ObjectId("66222333abcf"),
        "custid": 1,
        "name": "ruhul",
        "product": "Keyboard",
        "price": 45
    },
    {
        "_id": ObjectId("66222333abd0"),
        "custid": 2,
        "name": "amin",
        "product": "Monitor",
        "price": 200
    },
    {
        "_id": ObjectId("66222333abd1"),
        "custid": 2,
        "name": "amin",
        "product": "Desk Chair",
        "price": 150
    },
    {
        "_id": ObjectId("66222333abd2"),
        "custid": 2,
        "name": "amin",
        "product": "USB Hub",
        "price": 30
    },
    {
        "_id": ObjectId("66222333abd3"),
        "custid": 3,
        "name": "tara",
        "product": "Printer",
        "price": 100
    },
    {
        "_id": ObjectId("66222333abd4"),
        "custid": 3,
        "name": "tara",
        "product": "Ink Cartridge",
        "price": 20
    },
    {
        "_id": ObjectId("66222333abd5"),
        "custid": 3,
        "name": "tara",
        "product": "Paper",
        "price": 10
    },
    {
        "_id": ObjectId("66222333abd6"),
        "custid": 3,
        "name": "tara",
        "product": "Scanner",
        "price": 80
    }
]

```


now my target collection is [
    {
        "custid": 1,
        "price": 1304
    },
    {
        "custid": 2,
        "price": 380
    },
    {
        "custid": 3,
        "price": 210
    }
]

to do that,

```javascript
var mapFunc = function(){
    emit(this.custid,this.price);
}
var reduceFunc = function(key,price){
    return Array.sum(price);
}
db.order.mapReduce(mapFunc,reduceFunc,{out:"order_summary"})
```

or we can write:

```javascript
db.order.mapReduce(
    // produce key value pair
    function() {
        emit(this.custid, this.price);
    },
    // group the records
    function(key, prices) {
        return Array.sum(prices);
    },
    // storing the result set in order_summary collection. 
    {
        out: "order_summary"
    }
)

```