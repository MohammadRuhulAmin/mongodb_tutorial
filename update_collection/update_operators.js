/**
 * 
 * Update operators are: 
 * $set
 * $unset:
 * $inc:
 * $push:
 * $pull:
 * 
 */

/**
 * $set: To update the value of a field
 */
db.collection.updateOne(
    {name:"jone doe"},
    {$set:{age:30}},
    {upsert:false}
);

/**
 * $inc: for increment the value of a field
 * 
 */

db.collection.updateOne(
    {name:"ruhul"},
    {$inc:{views:1}}
);

/**
 * $push: to add new item in the array field
 */

db.collection.updateOne(
    {name:"rx"},
    {$push:{$tag:'mongoDB'}}
);