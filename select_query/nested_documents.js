/**
 * 
 * nested document query writing:
 * 
 */

var get_friend_info = db.getCollection('persons').find({
    "friends.name":"Lora",
    "age":23
});

/** Alternatively we can write: */

var get_friend_info = db.getCollection('persons').find({
    "friends":{"name":"Lora","age":23}
});