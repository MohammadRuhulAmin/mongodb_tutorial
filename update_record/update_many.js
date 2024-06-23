/**
 * For updating multiple records we use updateMany() function
 * db.collection.updateMany({ status: 'new' }, { $inc: { views: 1 } });
 * 
 */

db.collection('users').updateMany(
    {status:'inactive'}, /**filter data */
    {$inc:{views:3}}, /** increment views field with views += 3 */
    {upsert:false} /** for the option */
);