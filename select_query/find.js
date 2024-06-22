
/**To get all json: */
/**It is also called Emptly Query: */
var get_all_json = db.getCollection('collection_name').find({});

/**To count all json in a collection  */
var count_all_json = db.getCollection('collection_name').find({}).count();


