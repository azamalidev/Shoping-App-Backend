import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import productRouter from "./routes/product.js";
 import checkoutRouter from "./routes/checkout.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { EventEmitter } from "events";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerUI from "swagger-ui-express";

const eventEmitter = new EventEmitter();
const PORT = process.env.PORT || 3000;
const app = express();
app.use("./images", express.static("./images"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const connection = mongoose.connection;
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
mongoose.connect(
  "mongodb+srv://aazam7246:dTGqRKMRhGSo0WH9@cluster0.7lsx0xx.mongodb.net/assignment?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

connection.once("connected", () => {
  console.log("Databae is connected");
});
connection.on("error", (error) => {
  console.log("Database error", error);
});

// Routes
app.use("/product", productRouter);
 app.use("/checkout", checkoutRouter);

// Backend Website Port
app.listen(3000, () => {
  console.log("Server is connected");
  console.log(`app is started ${PORT}`);
  return "Wellcome to backend!";
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bcakend",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://giant-handkerchief-cow.cyclic.app",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
   
  },

  apis: ["./index.js"],
};

const specs = swaggerJsdoc(options);
swaggerUI.setup(specs, { customCssUrl: CSS_URL });
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
