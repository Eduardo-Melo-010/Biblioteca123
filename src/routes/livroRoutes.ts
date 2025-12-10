// src/routes/livroRoutes.ts
import { Router } from "express";
import LivroController from "../controllers/livroController";

class LivroRoutes {
  router = Router ();
  controller = new LivroController();

  constructor () {
    this.initializeRoutes();
  }
    
   initializeRoutes() {
    this.router.post("/", this.controller.createLivro);
    this.router.get("/", this.controller.getAllLivros);
    this.router.get("/:id", this.controller.getLivroById);
    this.router.put("/:id", this.controller.updateLivro);
    this.router.delete("/:id", this.controller.deleteLivro);
    this.router.delete("/generos/", this.controller.deleteAllLivros);
  } 
}
    export default new LivroRoutes().router;

