// src/routes/livroRoutes.ts
import { Router } from "express";
import LivroController from "../controllers/livroController";

class LivroRoutes {
  router = Router();
  controller = new LivroController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Criar um novo Livro
    this.router.post("/create", this.controller.createLivro);

    // Retornar todos os livros
    this.router.get("/getAll", this.controller.getAllLivros);

    // Retorna um livro específico pelo ID
    this.router.get("/:id", this.controller.getLivroById);

    // Atualizar um livro pelo ID
    this.router.put("/update/:id", this.controller.updateLivro);

    // Deletar um livro pelo ID
    this.router.delete("/delete/:id", this.controller.deleteLivro);

    // (Opcional) Deletar todos os livros
    this.router.delete("/deleteAll", this.controller.deleteAllLivros);
  }
}

export default new LivroRoutes().router;
