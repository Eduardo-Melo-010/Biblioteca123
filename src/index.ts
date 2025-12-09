
import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes/routes";
import { AppDataSource } from "./db/data-source";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081", 
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}


const app = express();
new Server(app);

const PORT = process.env.PORT || 3000;


AppDataSource.initialize()
  .then(() => {
    console.log("Database is running.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.error("Erro ao conectar com o banco de dados:", error));
