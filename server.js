const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./app/models");
const app = express();

//const corsOptions = {
//  origin: "*",
//};

//register cors middleware
app.use(cors());
app.use(express.json());

//koneksi database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log("gagal konek");
    process.exit();
  });

//memanggil routes mahasiswa
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("server started on port 8000"));
