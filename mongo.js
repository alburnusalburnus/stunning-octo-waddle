const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  number: String
});

personSchema.set(
  "toJSON",
  {
    virtuals: true
  },
  {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    }
  }
);

const Person = mongoose.model("Person", personSchema);
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

if (process.argv.length < 4) {
  Person.find({}).then(result => {
    console.log(result);
  });
  mongoose.connection.close();
}

if (process.argv.length >= 4 && process.argv.length <= 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  });
  person.save().then(response => {
    console.log("person saved!");
  });
  mongoose.connection.close();
}

const password = process.argv[2];

const url = `mongodb+srv://aceboi:${password}@cluster0-ahjoq.mongodb.net/persons-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
