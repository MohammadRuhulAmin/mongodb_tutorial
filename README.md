![MongoDB](./public/readme_images/mongodb_image.png)  
*an open source NoSQL database management program.*

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

| MongoDB |  | MySQL |
| --- | --- | --- |
| **Data model** | MongoDB stores data in JSON documents, then organizes them into collections. | MySQL stores data in columns and rows. Data storage is tabular and relational. |
| **Scalability** | MongoDB uses replication and sharding to scale horizontally. | MySQL uses vertical scaling and read replicas to improve performance at scale. |
| **Query language** | MongoDB uses MongoDB Query Language. | MySQL uses SQL. |
| **Performance** | MongoDB excels at inserting or updating a large number of records. | MySQL is faster when selecting a large number of records. |
| **Flexibility** | MongoDB does not have a schema, providing more flexibility and allowing it to work with unstructured, semi-structured, and structured data. | MySQL has a rigid schema that works well with structured data. |
| **Security** | MongoDB uses Kerberos, X.509, and LDAP certificates to authenticate users. | MySQL uses built-in authentication methods. |

## Major Disadvantages of MySQL

- **Scaling Limitations**: MySQL relies on vertical scaling (adding more resources to a single server), which can limit scalability for handling very large datasets and high traffic compared to NoSQL databases.

- **Schema Rigidity**: MySQL uses a rigid schema structure with predefined tables and columns, making it less flexible than NoSQL databases for applications with evolving data models.

- **Complexity in High Availability**: Achieving high availability in MySQL requires complex configurations like master-slave replication or clustering, leading to higher maintenance and potential points of failure.

- **Performance with Complex Queries**: MySQL can face performance issues with complex queries involving multiple joins or aggregations, particularly with large datasets.

- **Limited Support for Unstructured Data**: MySQL is optimized for structured data stored in tables and can be less efficient for managing and querying unstructured or semi-structured data compared to NoSQL databases.


## <span style="color: green;">When to use MongoDB?</span>

MongoDB is a suitable choice for various applications, including:

- **Big Data:** MongoDB’s flexible data model and horizontal scalability make it a great fit for managing large volumes of unstructured or semi-structured data.
- **Real-time analytics:** MongoDB’s aggregation framework and indexing capabilities help analyze and process data in real-time.
- **Content management:** With its dynamic schema, MongoDB can handle diverse content types, making it a suitable choice for content management systems.
- **Internet of Things (IoT) applications:** MongoDB can capture and store data from a large number of devices and sensors, proving beneficial in IoT scenarios.
- **Mobile applications:** MongoDB provides a flexible data model, which is an essential requirement for the dynamic nature and varying data types of mobile applications.

**In conclusion, MongoDB is a powerful and versatile NoSQL database that can efficiently handle unstructured and semi-structured data, making it an excellent choice for various applications and industries.**

## <span style="color:green">MongoDB Terminology</span>

This section of the guide will introduce you to the basic terminology used while working with MongoDB. Understanding these terms will help you to grasp the fundamentals of MongoDB and make it easier for you to follow along with the rest of the guide.

### MongoDB Terminology

| **Term**               | **Description**                                                                                                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Database**           | A MongoDB database is used to store and manage a set of collections. It consists of various collections, indexes, and other essential data structures required to store the data efficiently. |
| **Collection**         | A collection in MongoDB is a group of documents. The name of a collection must be unique within its database. Collections can be viewed as the table equivalencies in a relational database. |
| **Document**           | A document is a record in a MongoDB collection. It is comprised of a set of fields, similar to a row in a relational database. However, unlike tables in a relational database, no schema or specific structure is enforced on the documents within a collection. |
| **Field**              | A field in MongoDB is a key-value pair inside a document. It can store various types of data, including strings, numbers, arrays, and other documents. Fields in MongoDB can be seen as columns in a relational database. |
| **Index**              | Indexes in MongoDB are data structures that improve the speed of common search operations. They store a small portion of the dataset in a well-organized structure. This structure allows MongoDB to search and sort documents faster by reducing the number of documents it has to scan. |
| **Query, MongoDB Query Language (MQL)** | A query in MongoDB is used to retrieve data from the database. It retrieves specific documents or subsets of documents from a collection based on a given condition. |
| **Cursor**             | A cursor is a pointer to the result set of a query. It allows developers to process individual documents from the result set in an efficient manner.                                    |
| **Aggregation**        | Aggregation in MongoDB is the process of summarizing and transforming the data stored in collections. It is used to run complex analytical operations on the dataset or create summary reports. |
| **Replica Set**        | A replica set in MongoDB is a group of MongoDB instances that maintain the same data set. It provides redundancy, high availability, and automatic failover in case the primary node becomes unreachable. |
| **Sharding**           | Sharding is a method of distributing data across multiple machines. It is used in MongoDB to horizontally scale the database by partitioning the dataset into smaller, more manageable chunks called shards. |

## <span style="color: green">Study Topics</span>

<div>

<table>
<thead>
<tr><th>#SL</th>
<th>Topic Name</th>
<th>Methods </th>
</tr>
<tr>
<td>1.0</td><td>Introduction with MongoDB</td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/tree/main">Introductio with MongoDB</a></td>
</tr>
<tr>
<td>2.0</td><td>Create a Collection </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/tree/main/create_collections">implicit, explicit collection</a></td>
</tr>

<tr>
<td>2.1</td><td>Create a Collection with necessary constraints </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/create_collections/add_constraints.js">validator(), $jsonSchema()</a></td>
</tr>

<tr>
<td>2.1.1</td><td> Insert data </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/tree/main/managing_record">insertOne(), insertMany()</a></td>
</tr>

<tr>
<td>2.2.1</td>
<td>Update a Document</td>
<td>
<a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/update_record/update_one.js">updateOne()
</td>
</tr>

<tr>
<td>2.2.2</td>
<td>Update Operators</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/update_record/update_operators.js">
$set,$unset,$inc,$push,$pull</a></td>
</tr>


<tr>
<td>2.3</td><td>Delete a Collection </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/drop_collections/dc.js"> collection_name.drop()</a></td>
</tr>



</thead>
</table>
</div>

## 5 Major Disadvantages of MongoDB

- **Memory Usage**: MongoDB can consume a significant amount of memory, especially with larger data sets, due to its in-memory processing requirements.

- **Lack of Transactions**: MongoDB traditionally lacked full ACID transactions, although recent versions have introduced multi-document transactions, they are still not as robust as those in traditional RDBMS like MySQL.

- **Complexity in Querying**: MongoDB's query language (MQL) is powerful but can be more complex compared to SQL, especially for operations that require joins or complex aggregations.

- **Not Suitable for Complex Transactions**: While MongoDB supports multi-document transactions now, it may not be suitable for applications with complex transactional requirements typical in financial or banking systems.
- **Data Size and Storage**: MongoDB can lead to larger database sizes compared to relational databases due to denormalization and storing redundant data for performance reasons, which can impact storage costs and performance.

## <span style="color:green">Resources</span>

#### Blogs

- [MongoDB Documentation: Query Documents](https://www.mongodb.com/docs/manual/tutorial/query-documents/)
- [Knowi Blog: The Best Introduction to MongoDB Query Language (MQL)](https://www.knowi.com/blog/the-best-introduction-to-mongodb-query-language-mql/)
- [Roadmap.sh: MongoDB](https://roadmap.sh/mongodb)
- [Wikipedia: MongoDB](https://en.wikipedia.org/wiki/MongoDB)

#### YouTube

- [MongoDB Tutorial Playlist](https://www.youtube.com/watch?v=kSJLGc9ij7c&list=PLNF7sp688eT_iPD_fAso0y5IonLthsasS)
