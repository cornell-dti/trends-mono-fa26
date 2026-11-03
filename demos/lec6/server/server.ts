import express, { Express } from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json()); //json objects
app.use(cors());

// GET
app.get("/", (req, res) => {
  res.send("Happy prelim day!");
});

// POST
app.post("/api/", async (req, res) => {
  try {
    const key = req.body.key;
    if (!key) {
      throw new Error("key not  found");
    }
    console.log(key);
    res.json({
      message: `Hello World! Your key was ${key}`,
    });
  } catch (e: any) {
    res.status(404).json({ error: e.message });
  }
});

//PUT
app.put("/", (req, res) => {
  const body = req.body;
  const username = req.body.username;
  res.send(`Happy Halloween!${username}`);
});

// Delete
// Dynamic route
app.delete("/user/:id", (req, res) => {
  res.send(`delete endpoint for id ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
