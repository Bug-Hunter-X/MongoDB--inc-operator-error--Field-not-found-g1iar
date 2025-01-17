```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("6515f76866711234567890ab")}, {"$inc": {"counter": 1}});
```