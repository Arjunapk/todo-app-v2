const mongoose = require("mongoose");
const app = require("./app");

const db =
  "mongodb+srv://arjun030401:VYpeMtq2fdb6edCB@cluster0.1hftumb.mongodb.net/";
const connectDB = async () => {
  try {
    await mongoose
      .connect(`${db}`, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"));
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running at 127.0.0.1:${port}`);
});
