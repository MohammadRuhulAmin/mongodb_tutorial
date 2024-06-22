/**
 * 
 * to select only name,eyeColor and age 
 * syntax: find({},{name:1,age:1,eyeColor:1,_id:0})
 * 
 * 
 */

var get_short_info = db.getCollection('persons')
.find({},{name:1,age:1,eyeColor:1,_id:0});


var comp_short_info = db.getCollection('persons')
.find({},{name:1,age:1,eyeColor:1,_id:0,"company.location":1});