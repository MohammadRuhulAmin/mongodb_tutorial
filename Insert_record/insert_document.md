### Insert Single Record:

```javascript
    db.collection_name.insertOne({
        name:"Ruhul",
        email:"ruhul@ba-systems.com",
        contact:"123"
    });

```
**`insertOne()`:**  returns a document that includes the newly inserted document's _id field value.


### Insert Multiple Documents:

**`db.collection.insertMany()`** can insert multiple documents into a collection. Pass an array of documents to the method. If the documents do not specify an _id field, MongoDB adds the _id field with an ObjectId value to each document. See Insert Behavior.

```javascript
    var bsonArray = [
        {
        title: "Jurassic World: Fallen Kingdom",
        genres: [ "Action", "Sci-Fi" ],
        runtime: 130,
        rated: "PG-13",
        year: 2018,
        directors: [ "J. A. Bayona" ],
        cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
        type: "movie"
        },
        {
        title: "Tag",
        genres: [ "Comedy", "Action" ],
        runtime: 105,
        rated: "R",
        year: 2018,
        directors: [ "Jeff Tomsic" ],
        cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
        type: "movie"
        }
    ];
    db.collection_name.insertMany(bsonArray);

```

insertMany() returns a document that includes the newly inserted documents' _id field values.


### Additional Insert Method (Upsert)

- `db.collection.updateOne()` when used with the upsert: true option.

- `db.collection.updateMany()` when used with the upsert: true option.

- `db.collection.findAndModify()` when used with the upsert: true option.

- `db.collection.findOneAndUpdate()` when used with the upsert: true option.

- `db.collection.findOneAndReplace()` when used with the upsert: true 