```javascript
//Correct usage of $inc operator with upsert option
db.collection('myCollection').updateOne({"_id": ObjectId("6515f76866711234567890ab")}, {"$inc": {"counter": 1}}, {upsert: true});
```