# API REST application -  Week 8
- Create a repository with Express
- Set the basic configuration in order to start the server
- Connect to MongoDB using Moongose. create the model and schema
- Create the endpoints, basic CRUD operations

# User Guide
- Get all topics
  HTTP Method: GET
  Ruta: /topics

- Save a new topic
Using CURL command
 `curl --request POST http://localhost:3001/topics/ --header "Content-Type: application/json" --data '{
   "title":"My second topic",
   "body":"This is the main body",
   "author":"Pablo Rodriguez",
   "imageUrl":"hhtp://urlImage2.test"
}'`

- Delete a topic
HTTP Method: DELETE
Route: /topics/:permalink

- Update a topic
HTTP Method: PATCH
Route: /topics/:permalink

- Get a topic by key
HTTP Method: GET
Route: /topics/:permalink