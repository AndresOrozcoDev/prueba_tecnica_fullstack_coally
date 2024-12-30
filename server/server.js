require("dotenv").config();
const cors = require("cors");
const express = require("express");
const swaggerDocs = require("./swagger");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const taskRoutes = require("./routes/taskRoutes");
const connectToDatabase = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
// connectToDatabase();

// Configuración de CORS
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://prueba-tecnica-fullstack-coally.onrender.com",
    "https://sunny-souffle-83db73.netlify.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type"],
};

// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Configuración de Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/tasks", taskRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
  console.log(
    `OpenAPI JSON available at http://localhost:${PORT}/openapi.json`
  );
});
