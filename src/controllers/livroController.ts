import { Request, Response } from "express";
import livroRepository from "../repositories/livroRepository";
import { Livro } from "../model/livro";

export default class LivroController {
    private livroRepository = livroRepository; // usa a instância pronta

  
    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const { titulo, autor, anoPublicacao } = req.body;

            if (!titulo || !autor || !anoPublicacao) {
                res.status(400).json({ message: "Campos obrigatórios faltando" });
                return;
            }

            const livro = new Livro();
            livro.titulo = titulo;
            livro.autor = autor;
            livro.anoPublicacao = anoPublicacao;

            const novoLivro = await this.livroRepository.createLivro(livro);
            res.status(201).json(novoLivro);
        } catch (error) {
            res.status(500).json({ message: `Erro ao cadastrar o livro: ${error}` });
        }
    };

    
    getAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const livros = await this.livroRepository.getAllLivro();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar livros: ${error}` });
        }
    };

    
    getById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const livro = await this.livroRepository.getLivroById(Number(id));

            if (!livro) {
                res.status(404).json({ message: "Livro não encontrado" });
                return;
            }

            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar o livro: ${error}` });
        }
    };

    // UPDATE - PUT /api/livros/:id
    update = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const livroExistente = await this.livroRepository.getLivroById(Number(id));

            if (!livroExistente) {
                res.status(404).json({ message: "Livro não encontrado" });
                return;
            }

            const { titulo, autor, anoPublicacao } = req.body;

            if (titulo) livroExistente.titulo = titulo;
            if (autor) livroExistente.autor = autor;
            if (anoPublicacao) livroExistente.anoPublicacao = anoPublicacao;

            await this.livroRepository.updateLivro(livroExistente);
            res.status(200).json(livroExistente);
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar o livro: ${error}` });
        }
    };

    // DELETE - DELETE /api/livros/:id
    delete = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const livroExistente = await this.livroRepository.getLivroById(Number(id));

            if (!livroExistente) {
                res.status(404).json({ message: "Livro não encontrado" });
                return;
            }

            await this.livroRepository.deleteLivro(Number(id));
            res.status(200).json({ message: "Livro removido com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `Erro ao excluir o livro: ${error}` });
        }
    };
}
