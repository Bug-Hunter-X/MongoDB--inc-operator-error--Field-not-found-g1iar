# MongoDB $inc Operator Error: Field Not Found
This example demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field that doesn't exist in the document.  The solution shows how to use the `upsert:true` option to handle this. 

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the correction.