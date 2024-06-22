/**
 * 
 * 
 * $all : Array contains all specified values independent of order 
 * $size: Array is of certain size
 * 
 * 
 */


var get_tags_array_has_length_four = db.getCollection('persons')
.find({"tags":{$size:4}});