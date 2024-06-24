
### Documents:

MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, 
though it contains more data types than JSON. 

### `BSON`
```javascript
{
    name:"Ruhul",
    age:"28",
    status:"Active",
    groups:["ETL","GIS","SWE"]
}
```

[More On BSON](https://bsonspec.org/)

### Document Structure

MongoDB documents are composed of field-and-value pairs and have the following structure:
```javascript
    {
        field1:value1,
        field2:valu2,
        ..........
        fieldN: valueN
    }

    /* Example: */
    {
        _id: ObjectId("5099803df3f4948bd2f98391"), //_id holds an ObjectId.
        name: { 
            first: "Alan", //holds an embedded document that contains the fields first and last.
            last: "Turing" // birth and death hold values of the Date type.
        },
        birth: new Date('Jun 23, 1912'),
        death: new Date('Jun 07, 1954'),
        contribs:  //holds an array of strings
            [ 
                "Turing machine",
                "Turing test", 
                "Turingery" 
            ],
        views : NumberLong(1250000) //holds a value of the NumberLong type.
    }
```

### `Embedded Documents : ` 
To specify or access a field of an embedded document with dot notation, concatenate the embedded document name with the dot (.) and the field name, and enclose in quotes:

```javascript
    "<embedded document>.<field>"

    {
    ...
    name: { first: "Alan", last: "Turing" },
    contact: { phone: { type: "cell", number: "111-222-3333" } },
    ...
    }
```


### MongoDB Field Naming Restrictions and Document Size

#### Field Naming Restrictions

- Field names are strings.
- The `_id` field name is reserved as the primary key. Its value must be unique, immutable, and can be of any BSON type except arrays.
- Field names cannot contain null characters.
- Top-level field names should not start with a dollar sign (`$`).

### Document Size

- The maximum size of a BSON document is 16MB.
- This limit ensures that individual documents do not consume excessive RAM or bandwidth during transmission.
- MongoDB provides a GridFS API for storing documents larger than 16MB.

### Important Notes

- A single document may contain duplicate fields.
- MongoDB preserves the order of fields in documents, except for the `_id` field (which always appears first).
- Renaming fields may change the order of fields in documents.
- `_id` Field:
  - Every MongoDB document in a collection must have a unique `_id` field, akin to a primary key in relational databases.
  - If not explicitly provided by the user, MongoDB automatically generates an `ObjectId` for the `_id` field.
  - MongoDB creates a unique index on the `_id` field by default.
  - The value of the `_id` field can be of any BSON type except arrays.
  - By default, the `_id` field is the first field in every document.



  The MongoDB Query Language does not support documents with duplicate field names. While some BSON builders may support creating a BSON document with duplicate field names, inserting these documents into MongoDB is not supported even if the insert succeeds, or appears to succeed. For example, inserting a BSON document with duplicate field names through a MongoDB driver may result in the driver silently dropping the duplicate values prior to insertion, or may result in an invalid document being inserted that contains duplicate fields. Querying against any such documents would lead to arbitrary and inconsistent results.

