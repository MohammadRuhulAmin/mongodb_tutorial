<!-- <div style="text-align:center;">
<pre style="font-family: monospace; font-size: 25px;">
    MeWOW Mongo!
</pre>
</div> -->

<div style="text-align:center">
        <img src="./public/readme_images/mongodb_image.png" alt="MongoDB">
        <img src="./public/readme_images/meow-cat.gif" height="115"  alt="Meow Cat" 
        style ="height: 115px;border: 2px solid #000; border-radius: 15px; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
        >
        
</div>


<p style="text-align:center"><b>MeaooowNgo</b> : <i>an open source NoSQL database management program.</i></p>
                                                  

## <span style="color: green;">What is MongoDB?</span>

MongoDB is an open-source, document-based, and cross-platform NoSQL database that offers high performance, high availability, and easy scalability. It differs from traditional relational databases by utilizing a flexible, schema-less data model built on top of BSON (Binary JSON), allowing for non-structured data to be easily stored and queried.

### <span style="color: green;">Key Features of MongoDB</span>



- **Document-oriented:** MongoDB stores data in JSON-like documents (BSON format), meaning that the data model is very flexible and can adapt to real-world object representations easily.
- **Scalability:** MongoDB offers automatic scaling, as it can be scaled horizontally by sharding (partitioning data across multiple servers) and vertically by adding storage capacity.
- **Indexing:** To enhance query performance, MongoDB supports indexing on any attribute within a document.
- **Replication:** MongoDB provides high availability through replica sets, which are primary and secondary nodes that maintain copies of the data.
- **Aggregation:** MongoDB features a powerful aggregation framework to perform complex data operations, such as transformations, filtering, and sorting.
- **Support for ad hoc queries:** MongoDB supports searching by field, range, and regular expression queries.

### MongoDB vs MySQL

<!-- ![MongoDB](./public/readme_images/cat-head-smash.gif)   -->
<img src="./public/readme_images/cat-head-smash.gif" alt="MongoDB" width="300" />

|  | MongoDB | MySQL |
| --- | --- | --- |
| **Data model** | MongoDB stores data in JSON documents, then organizes them into collections. | MySQL stores data in columns and rows. Data storage is tabular and relational. |
| **Scalability** | MongoDB uses replication and sharding to scale horizontally. | MySQL uses vertical scaling and read replicas to improve performance at scale. |
| **Query language** | MongoDB uses MongoDB Query Language. | MySQL uses SQL. |
| **Performance** | MongoDB excels at inserting or updating a large number of records. | MySQL is faster when selecting a large number of records. |
| **Flexibility** | MongoDB does not have a schema, providing more flexibility and allowing it to work with unstructured, semi-structured, and structured data. | MySQL has a rigid schema that works well with structured data. |
| **Security** | MongoDB uses Kerberos, X.509, and LDAP certificates to authenticate users. | MySQL uses built-in authentication methods. |

## <span style="color: green;">When to use MongoDB?</span>

MongoDB is a suitable choice for various applications, including:

- **Big Data:** MongoDB’s flexible data model and horizontal scalability make it a great fit for managing large volumes of unstructured or semi-structured data.
- **Real-time analytics:** MongoDB’s aggregation framework and indexing capabilities help analyze and process data in real-time.
- **Content management:** With its dynamic schema, MongoDB can handle diverse content types, making it a suitable choice for content management systems.
- **Internet of Things (IoT) applications:** MongoDB can capture and store data from a large number of devices and sensors, proving beneficial in IoT scenarios.
- **Mobile applications:** MongoDB provides a flexible data model, which is an essential requirement for the dynamic nature and varying data types of mobile applications.

*MongoDB is a powerful and versatile NoSQL database that can efficiently handle unstructured and semi-structured data, making it an excellent choice for various applications and industries.*

## <span style="color: green">Topics</span>

<div>
<table style="width:100%">
<tr>
<td> Page No.</td>
<td>Topic</td>
<td> Resource </td>
</tr>
<tr>
<td> 01 </td>
<td>Introduction</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/tree/main">Introduction with MongoDB</a></td>
</tr>

<tr>
<td>02 </td>
<td>MongoDB Terminology </td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/Terminology/mongo_terms.md"> Basic Terminology </a> </td>
</tr>

<tr>
<td> 03 </td>
<td>Create Collection</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/create_collections/collection_creation.md"> Create Collection (Implicite, Explicite, Capped Collection ) </a></td>
</tr>
<tr>
<td> 04 </td>
<td> Collection Type </td>
<td><a href ="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/collection/collection_type/different_collections.md">Capped vs NonCapped collection</a></td>
</tr>

<tr>
<td> 05 </td>
<td>Document</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/document/documents.md">BSON format</a></td>
</tr>

<tr>
<td> 06 </td>
<td>Insert Document </td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/crud/Insert_record/insert_document.md"> Single Record, Multi Record Insertion</a></td>
</tr>
<tr>
<td> 07 </td>
<td> Delete Document </td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/crud/delete_record/delete_document.md">DeleteOne(), DeleteMany(),findOneAndDelete(),findAndModify() </a> </td>
<td></td>
</tr>

<tr>
<td>07</td>
<td>Update Document</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/crud/update_record/update_document.md"> UpdateOne(), UpdateMany() and Conditional Operators </a> </td>
</tr>

<tr>
<td>08</td><td>Replace Document</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/crud/replace_record/replace.md">replaceOne()</a></td>
</tr>

<tr>
<td>09</td>
<td>Select Document</td>
<td><a href = "https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/select_document/select_record.md"> Select Methods and conditional $operators</a> </td>
</tr>

<tr>
<td></td>
<td></td>
<td></td>
</tr>


<tr>
<td></td>
<td></td>
<td></td>
</tr>

</table>
<div>





## <span style="color:green">Resources</span>

#### Blogs
- [w3 Resource](https://www.w3resource.com/mongodb/mongodb-slice-operators.php)
- [MongoDB Documentation: Query Documents](https://www.mongodb.com/docs/manual/tutorial/query-documents/)
- [Knowi Blog: The Best Introduction to MongoDB Query Language (MQL)](https://www.knowi.com/blog/the-best-introduction-to-mongodb-query-language-mql/)
- [Roadmap.sh: MongoDB](https://roadmap.sh/mongodb)
- [Wikipedia: MongoDB](https://en.wikipedia.org/wiki/MongoDB)

#### YouTube

- [MongoDB Tutorial Playlist](https://www.youtube.com/watch?v=kSJLGc9ij7c&list=PLNF7sp688eT_iPD_fAso0y5IonLthsasS)
