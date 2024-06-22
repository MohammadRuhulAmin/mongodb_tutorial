/**
 * get the value by index:
 * 
 */

/**find the first tag: */

var first_tag_val = db.getCollection('persons')
.find({"tags.0":"ad"})