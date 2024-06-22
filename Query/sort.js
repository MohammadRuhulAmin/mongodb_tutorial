
/***
 * 
 * To sort by a key:
 * {"name":1} here 1 represents assending order 
 * must use find({}) before sort() function
 */

/**print all the data in ascending sorted order */

var sort_name = db.getCollection('persons').find({}).sort({"name":1});

/**print all the data in descending sorted order */

var sort_name = db.getCollection('persons').find({}).sort({"name":-1});

/**Multiple sort: */

var msort = db.getCollection('persons')
.find({
    $and:[
        {"gender":"female"},
        {"eyeColor":"green"},
        {"age":{"$lt":27}},
        {"age":{"$gt":23}},
        {"favoriteFruit":{"$in":["banana","orange"]}}
    ]
}).sort({"age":-1},{name:1},{gender:-1});
