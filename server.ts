import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import routes
import user from "./src/routes/user-routes";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// init route
app.use("/api/v1/user", user);

app.get("/", (req, res) => {
  res.send("API running");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
