
import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes/routes";
import { AppDataSource } from "./db/data-source";

const app: Application = express();

// Configurações do Express
const corsOptions: CorsOptions = {
    origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
new Routes(app);

// Inicializa o banco e, só depois, o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Database is running.");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

AppDataSource.initialize()
  .then(() => {
      // here you can start to work with your database
      console.log(`Database is running.`);
  })
  .catch((error) => console.log(error))
