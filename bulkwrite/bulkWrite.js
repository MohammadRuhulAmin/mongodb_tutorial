/**
 * 
 * Bulk write operations allow you to perform multiple create, update, 
 * and delete operations in a single command, 
 * which can significantly improve the performance of your application. 
 * 
 * Two types of bulkWrite():
 * 1.Ordered Bulk Write
 * 2.Unordered Bulk Write
 */


/**
 * Ordered Bulk Write:
 * In this type of bulk operation, MongoDB executes the write operations in the order you provide. 
 * If a write operation fails, MongoDB returns an error and does not proceed with the remaining operations.
 */

/**
 * Unordered Bulk Write: In this type of bulk operation, MongoDB can execute the write operations in any order.
 * If a write operation fails, MongoDB will continue to process the remaining write operations.
 */


/**
 * To perform a bulk write operation,
 * use the initializeOrderedBulkOp() or initializeUnorderedBulkOp() methods to create a bulk write object.
 * 
 */

/** Ordered Bulk Write:  */
const orderedBulk = db.collection('users').initializeOrderedBulkOp();
orderedBulk.insert({ _id: 1, name: 'John Doe' });
orderedBulk.find({ _id: 2 }).updateOne({ $set: { name: 'Jane Doe' } });
orderedBulk.find({ _id: 3 }).remove();

orderedBulk.execute((err, result) => {
  // Handle error or result
});

/**Unordered Bulk Write: */

const unorderedBulk = db.collection('users').initializeUnorderedBulkOp();
unorderedBulk.insert({ _id: 1, name: 'John Doe' });
unorderedBulk.find({ _id: 2 }).updateOne({ $set: { name: 'Jane Doe' } });
unorderedBulk.find({ _id: 3 }).remove();
unorderedBulk.execute((err, result) => {
  // Handle error or result
});