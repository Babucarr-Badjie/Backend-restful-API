import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/restRoutes";

const app = express();
const PORT = 3001;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/RESTFUL-APIdb", {
  useNewUrlParser: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});

// npm start    ----> to start the server
