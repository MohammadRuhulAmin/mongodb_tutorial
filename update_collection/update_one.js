/**
 * Syntax:db.collection.updateOne(<filter>, <update>, <options>)
 * 
    <filter>: Specifies the criteria for selecting the document to update.
    <update>: Specifies the modifications to apply to the selected document.
    <options>: (Optional) Additional options to configure the behavior of the update operation.
    it is mostly update + insert = upsert.

 * updateOne(): update only a single document.
 * 
 */

   /**Example:1 */
    db.collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });
   /**Example:2 */
    db.users.updateOne(
      { user_id: 123 }, // Filter: find the document with user_id 123
      
      { 
        $set: { email: "john.newemail@example.com" } // Update: set a new email address
      },
      {
        upsert: false // Options: do not insert a new document if no document matches the filter
      }
    );
    
    /**Example:3 */
    db.users.updateOne(
      { name: "Jane Doe" }, // Filter: find the document with name "Jane Doe"
      { 
        $set: { 
          email: "xyb@gx.oh", // Update: set a new email address
          age: 12 // Update: set a new age
        } 
      },
      { upsert: true } // Options: insert a new document if no document matches the filter
    );
    

    /**
     * 
      Filter: { user_id: 123 } - This specifies the criteria to find the document you want to update. In this case, it looks for a document with a user_id of 123.
      Update: { $set: { email: "john.newemail@example.com" } } - This specifies the update to be made. The $set operator is used to set the value of the email field to a new email address.
      Options: { upsert: false } - This is optional. The upsert option, when set to false, ensures that a new document is not inserted if no document matches the filter. If set to true, 
      a new document would be created if no match is found.
     * 
     */


      