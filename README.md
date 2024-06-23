
<div>
    <img src="./public/readme_images/mongodb_image.png"><br>
    <sub>an open source NoSQL database management program.</sub>
</div>
<div> 
<h2>What is MongoDB ? </h2>

<p>MongoDB is an open-source, document-based, and cross-platform NoSQL database that offers high performance, high availability, and easy scalability. It differs from traditional relational databases by utilizing a flexible, schema-less data model built on top of BSON (Binary JSON), allowing for non-structured data to be easily stored and queried.
Key Features of MongoDB</p>

<ul>
        <li>Document-oriented: MongoDB stores data in JSON-like documents (BSON format), meaning that the data model is very flexible and can adapt to real-world object representations easily.</li>
        <li> Scalability: MongoDB offers automatic scaling, as it can be scaled horizontally by sharding (partitioning data across multiple servers) and vertically by adding storage capacity.</li>
        <li>Indexing: To enhance query performance, MongoDB supports indexing on any attribute within a document.</li>
        <li>Replication: MongoDB provides high availability through replica sets, which are primary and secondary nodes that maintain copies of the data.</li>
        <li> Aggregation: MongoDB features a powerful aggregation framework to perform complex data operations, such as transformations, filtering, and sorting.</li>
        <li> Support for ad hoc queries: MongoDB supports searching by field, range, and regular expression queries.
    </li>
    </ul>
</div>
       
<div>
    <h2>When to use MongoDB ? </h2>
    <p> MongoDB is a suitable choice for various applications, including:</p>

   <ul>
            <li>Big Data: MongoDB’s flexible data model and horizontal scalability make it a great fit for managing large volumes of unstructured or semi-structured data.</li>
            <li>Real-time analytics: MongoDB’s aggregation framework and indexing capabilities help analyze and process data in real-time.</li>
            <li> Content management: With its dynamic schema, MongoDB can handle diverse content types, making it a suitable choice for content management systems.</li>
            <li>Internet of Things (IoT) applications: MongoDB can capture and store data from a large number of devices and sensors, proving beneficial in IoT scenarios. </li>
            <li>Mobile applications: MongoDB provides a flexible data model, which is an essential requirement for the dynamic nature and varying data types of mobile applications. </li>
    </ul>
</div>


<b>In conclusion, MongoDB is a powerful and versatile NoSQL database that can efficiently handle unstructured and semi-structured data, making it an excellent choice for various applications and industries.</b>

<div>
<h2>MongoDB Terminology</h2>
    <p>This section of the guide will introduce you to the basic terminology used while working with MongoDB. Understanding these terms will help you to grasp the fundamentals of MongoDB and make it easier for you to follow along with the rest of the guide.</p>
    
<h2>MongoDB Terminology</h2>
<table>
<tr>
<td><u>Database</u></td><td><p>A MongoDB database is used to store and manage a set of collections. It consists of various collections, indexes, and other essential data structures required to store the data efficiently.</p></td>
</tr>
<tr>
<td><u>Collection</u></td><td><p>A collection in MongoDB is a group of documents. The name of a collection must be unique within its database. Collections can be viewed as the table equivalencies in a relational database.</p></td>
</tr>
<tr>
<td><u>Document</u></td><td><p>A document is a record in a MongoDB collection. It is comprised of a set of fields, similar to a row in a relational database. However, unlike tables in a relational database, no schema or specific structure is enforced on the documents within a collection.</p></td>
</tr>
<tr>
<td><u>Field</u></td><td><p>A field in MongoDB is a key-value pair inside a document. It can store various types of data, including strings, numbers, arrays, and other documents. Fields in MongoDB can be seen as columns in a relational database.</p></td>
</tr>
<tr>
<td><u>Index</u></td><td> <p>Indexes in MongoDB are data structures that improve the speed of common search operations. They store a small portion of the dataset in a well-organized structure. This structure allows MongoDB to search and sort documents faster by reducing the number of documents it has to scan.</p></td>
</tr>
<tr>
<td><u>Query, MongoDB Query Language (MQL)</u></td><td>  <p>A query in MongoDB is used to retrieve data from the database. It retrieves specific documents or subsets of documents from a collection based on a given condition.</p>
</td>
</tr>
<tr>
<td><u>Cursor</u></td><td> <p>A cursor is a pointer to the result set of a query. It allows developers to process individual documents from the result set in an efficient manner.</p></td>
</tr>
<tr>
<td><u>Aggregation</u></td><td><p>Aggregation in MongoDB is the process of summarizing and transforming the data stored in collections. It is used to run complex analytical operations on the dataset or create summary reports.</p></td>
</tr>
<tr>
<td><u>Replica Set</u></td><td><p>A replica set in MongoDB is a group of MongoDB instances that maintain the same data set. It provides redundancy, high availability, and automatic failover in case the primary node becomes unreachable.</p></td>
</tr>
<tr>
<td><u>Sharding</u></td><td> <p>Sharding is a method of distributing data across multiple machines. It is used in MongoDB to horizontally scale the database by partitioning the dataset into smaller, more manageable chunks called shards.</p></td>
</tr>
</table>

</div>

<div>
<h2>Study Topics</h2>
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
<td>2.1.1</td><td> Insert data </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/tree/main/managing_collections">insertOne(), insertMany()</a></td>
</tr>

<tr>
<td>2.2.1</td>
<td>Update a Document</td>
<td>
<a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/update_collection/update_one.js">updateOne()
</td>
</tr>

<tr>
<td>2.2.2</td>
<td>Update Operators</td>
<td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/update_collection/update_operators.js">
$set,$unset,$inc,$push,$pull</a></td>
</tr>


<tr>
<td>2.3</td><td>Delete a Collection </td><td><a href="https://github.com/MohammadRuhulAmin/mongodb_tutorial/blob/main/drop_collections/dc.js"> collection_name.drop()</a></td>
</tr>



</thead>
</table>
</div>

<div>
<h3>Resources: </h3>
<ul>
<li><span>https://www.mongodb.com/docs/manual/tutorial/query-documents/</span></li>
<li><span>https://www.knowi.com/blog/the-best-introduction-to-mongodb-query-language-mql/</span>
</li>
<li><span>https://roadmap.sh/mongodb</span></li>
<li><span>https://en.wikipedia.org/wiki/MongoDB</span></li>
</ul>


</div>