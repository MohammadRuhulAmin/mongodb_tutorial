
/***
 * 
 * To sort by a key:
 * {"name":1} here 1 represents assending order 
 * must use find({}) before sort() function
 */

/**print all the data in sorted order */

var sort_name = db.getCollection('persons').find({}).sort({"name":1});