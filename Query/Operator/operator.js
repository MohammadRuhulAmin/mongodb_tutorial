/** Operators add conditions */
/**
 * 
 * General Syntax:
 * 
 * {<fieldName1>:{<operator1>:<value1>},.... }
 * 
 * 
 * Examplex:
 * {"favoriteFruit":{"$ne":"apple"}}
 * {"age":{"$gt":25}}
 * {"eyeColor":{"$in":["green","blue"]}}
 * 
 */

 /**
  * $eq  = equal
  * $gt  = greater than 
  * $lt  = less than
  * $ne  = not equal
  * $gte = greater than or equal
  * $lte = less than or equal
  * 
  */

 /** find orange: */
 var not_equal_orange = db.getCollection('persons').find({"favoriteFruit":{"$ne":"orange"}});

 /** find age between 23 and 27 */
 var get_between_age = db.getCollection('persons').find({
    "age":{"$gt":23},
    "age":{"$lt":27}
 });
 
 /** find age between 23 and 27 and eyeColor = "green" */

 var get_age_eye = db.getCollection('persons').find({
    "age":{"$gt":23},
    "age":{"$lt":27},
    "eyeColor":"green",
    "favoriteFruit":{"$ne":"orange"}
 });

 /** get data of a specific date:  */
 
 var_gt_date = db.getCollection('persons').find({
    "registered":{"$gt":ISODate("2016-08-20T04:43:18.000Z")}
 });