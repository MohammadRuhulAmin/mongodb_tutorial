
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

