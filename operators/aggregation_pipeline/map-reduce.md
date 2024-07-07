## MapReduce (Map --> Reduce --> Query)

Map-reduce is a data processing paradigm for condensing large volumnes of data into useful aggregated results.

Map: is a javascript function that maps a value with a key and 
emits (produces) a key-value pair.

reduce: is a javascript function that reduces or groups all the documents having the same key.

out: Specifices the location of the map-reduce query result.

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