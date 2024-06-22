
/***
 * 
 * To sort by a key:
 * {"name":1} here 1 represents assending order 
 * must use find({}) before sort() function
 */

/**print all the data in ascending sorted order */

var sort_name = db.getCollection('persons').find({}).sort({"name":1});

/**print all the data in descending sorted order */

var sort_name = db.getCollection('persons').find({}).sort({"name":-1});