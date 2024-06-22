/**
 * Logically combines multiples conditions. Resulting documents must match
 * ANY of the conditions
 * Syntax:
 * {$or:[<condition1>,{<condition2>}]}
 * 
 */

/** Find gender:female or eyeColor:green */

var get_gn_ec = db.getCollection('persons').find({
    $or:[
        {"gender":"male"},
        {"eyeColor":"green"}
    ]

})

var ex_ = db.getCollection('persons').find({
    $or:[
        {"gender":"male"},
        {"eyeColor":"green"},
        {"age":{"$in":[23,27]}}
    ]

}).sort({age:1});