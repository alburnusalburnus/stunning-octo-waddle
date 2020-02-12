const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use(cors());

app.use(express.static("build"));

app.get("/persons", (request, response) => {
  Person.find({})
    .then(persons => {
      response.json(persons.map(person => person.toJSON()));
    })
    .catch(error => console.log(error));
});

app.get("persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person.toJSON());
      } else {
        response.status(204).end();
      }
    })
    .catch(error => next(error));
});

app.delete("/persons/:id", (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.post("/persons", (request, response) => {
  const body = request.body;
  if (body === undefined) {
    return response.status(400).json({ error: "content missing" });
  }
  const person = new Person({
    name: body.name,
    number: body.number
  });
  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON());
  });
});

app.put("/persons/:id", (request, response, next) => {
  const body = request.body;

  const updatePerson = {
    name: body.name,
    number: body.number
  };
  Person.findByIdAndUpdate(request.params.id, updatePerson, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON());
    })
    .catch(error => next(error));
});

app.get("/info", (request, response) => {
  const amount = Person.collection.count();
  const time = new Date();
  response.send(`Phonebook has info for ${amount} persons 
${time}`);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
