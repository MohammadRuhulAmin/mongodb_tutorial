/**
 * $in: in operator
 * $nin: not in operator
 * 
 * Examples:
 * {"eyeColor":{"$in":["green","blue"]}}
 * {"favoriteColor:{"$nin":["banana","apple"]} }
 */

/** find all age in 23,24 */

get_age_in = db.getCollection('persons').find({
    "age":{"$in":[23,24]}
});

/** find all age not in 23,24 */

get_age_in = db.getCollection('persons').find({
    "age":{"$nin":[23,24]}
});
