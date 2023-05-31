import express, { Request, Response } from "express";
import { userRouter } from "./routers";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/users", userRouter)

app.listen(port, () => console.log(`Application started on port: ${port}`));
