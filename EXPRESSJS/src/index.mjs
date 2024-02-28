import express from "express";

const app = express();

app.use(express.json());
// express app created

// listen to a specific port that you requested from a express server
// sign your port 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running a PORT 3000");
})

// we need to setup a router to request and response from the server
// route is just a path 

// for example user route 
// localhost:3000/user

// registor a route for a specific task

const userData = [{ id: 1, product: "Anant" }, { id: 2, product: "Anant" },
{ id: 3, product: "Anant" }, { id: 4, product: "Anant" }]

app.get('/', (request, response) => {
  response.send("<H1>hello</H1>");
});


app.get('/api/user/', (request, response) => {
  response.status(201).send([{ id: 1, username: "Anant" },
  { id: 2, username: "Anant" }, { id: 3, username: "Anant" }, { id: 4, username: "Anant" }]
  )
})

// create a User 

 app.post("/api/user", (request, response) => {
  const { body } = request;
   const newUser = { id: userData[userData.length - 1].id + 1, ...body }
  userData.push(newUser);
  return response.status(200).send(newUser);
 })

app.get('/api/product', (request, response) => {
  response.status(201).send(
    console.log("Hello world!1")
  )
})

app.get('/api/product/:id', (request, response) => {
  console.log(request.params)
  const parcedId = parseInt(request.params.id);
  if (isNaN(parcedId)) return response.status(400).send({
    msg: "Bad Request!!"
  });
  const findUser = userData.find((user) => user.id === parcedId);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
})
