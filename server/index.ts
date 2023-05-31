import express, { json, urlencoded, Request, Response } from "express";
import { userRouter } from "./routers";
import swaggerUI from "swagger-ui-express";
import SwaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
const port = 3000;

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Vue Academy",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Development server",
    },
  ],
};

const openapiSpecification = SwaggerJSDoc({
  swaggerDefinition,
  apis: ["./routers/*.ts"],
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use("/swagger.json", (req: Request, res: Response) =>
  res.json(openapiSpecification).status(200)
);

app.use("/users", userRouter);

app.listen(port, () => console.log(`Application started on port: ${port}`));
