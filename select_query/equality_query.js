/**To find json by values: */
/*
    {"name":"kitty snow"}
    {"age":39}
    {"gender":"female","eyeColor":"blue"}
    Here , is considered as and condition
*/

get_json_has_age_20 = db.getCollection('collection_name').find({"age":20});

get_json_by_name = db.getCollection('collection_name').find({name:"Aurelia Gonzales"})

/** Applying And in Query */
get_json_gender_female_and_eye_color_green = db.getCollection('persons').
find({gender:"female",eyeColor:"green"});