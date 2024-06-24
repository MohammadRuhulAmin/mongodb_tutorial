/**
 * replaceOne():
 * This method replaces a document that matches the query criteria with a new document. The syntax for replaceOne is:
 * db.collection.replaceOne(<filter>, <replacement>, <options>)
 */

db.collection('users').replaceOne(
    {name:"jone"}, // for filtering
    {name:"Jone Doe",$inc:{age:1}}, // for replacing
    {upsert:false} // If true, creates a new document if no document matches the filter
);