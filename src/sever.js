const connect = require("./configs/db");
const app = require("./index");
require("dotenv").config();

const port = 3000 || process.env.PORT;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening to port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
