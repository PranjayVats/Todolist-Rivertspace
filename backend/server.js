const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });

//connecting to database
connectDatabase();
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
