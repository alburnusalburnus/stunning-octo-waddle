const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use(cors());

app.use(express.static("build"));

const persons = [
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  },
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Juha Kalle",
    number: "040123123",
    id: 5,
    important: true
  }
];

app.get("/persons", (request, response) => {
  response.json(persons);
});

app.get("persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  person = persons.filter(person => person.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0;
  return maxId + 1;
};

app.post("/persons", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing"
    });
  }
  const person = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId()
  };
  persons = persons.concat(person);
  response.json(person);
});

app.get("/info", (request, response) => {
  const amount = persons.length;
  const time = new Date();
  response.send(`Phonebook has info for ${amount} persons 
${time}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
