
/**
 * 
 * $elemMatch: At least one nested document in the Array must match ALL conditions.
 * Order of conditions
 * doesnt matter.
 * 
 * { <arrayField>:{$elemMatch:{<cond1>,<cond2>,....} } }
 * 
 */

/** Write a query that will find registered false or age 25 or name Bob */

var ans = db.getCollection('persons')
.find({
    friends:{
        $elemMatch:{
            "name":"Bob",
            "registered":false,
            "age":{"$gt":25 },
            "age":{"$lt":27}
            
        }
    }
});