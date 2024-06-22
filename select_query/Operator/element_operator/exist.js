/**
 * 
 * $exist: check a field is exist or not in a json
 * 
 */

var check_field_exist = db.getCollection('persons')
.find({
    name:{$exists:true}
});


var in_embadded_docs = db.users.find({ 'address.city': { $exists: true } });