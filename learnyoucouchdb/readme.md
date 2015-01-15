learnyoucouchdb
====================================

This workshop is mainly for you to get started with couchdb and the focus is not on JavaScript or Node.

After installing couchdb, we can use curl to make http requests to CRUD.

1. Create DB: ```curl -X PUT http://localhost:5984/[dbname]```

2. Create a document in DB: ```curl -X PUT http://localhost:5984/[dbname]/[id] -d '[json object string]'```

3. map and reduce are functions defined by programmer for generating and maniputing views
