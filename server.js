const express = require("express");
const cors = require("cors");
const db = require("./model");
const routes = require("./routes/routes");
var morgan = require("morgan");

require("dotenv").config();
/**Mongoose Connection  */
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express();
app.use(morgan("dev"));
var corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://127.0.0.1:8080"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// api route
app.use("/api", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
