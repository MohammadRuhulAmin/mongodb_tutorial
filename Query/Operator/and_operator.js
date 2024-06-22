/**
 * Logically combines multiple conditions. Resulting 
 * documents must match ALL conditions.
 * 
 * {
 *      $and:[
 *          {<condition1>},
 *          {<condition2>},
 *          .......
 *      ]
 * }
 * 
 * Examples:
 * {$and:["gender":"male",{"age":25}]}
 * 
 * 
 * {$and:[{"age":{"$ne":25}} , {"age":{"$gte":20}}]} is not same ase {"age":{"$ne":25}, "age":{"$gte":20} }
 * 
 */

/** find gender:female and eyeColor:green  with in condition using explicit and operator: */

var find_gender_eyecolor = db.getCollection('persons')
.find({
    $and:[
        {"gender":"female"},
        {"eyeColor":"green"},
        {"age":{"$lt":27}},
        {"age":{"$gt":23}},
        {"favoriteFruit":{"$in":["banana","orange"]}}
    ]
}).sort({"age":1});