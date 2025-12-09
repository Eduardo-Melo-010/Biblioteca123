import { AppDataSource } from "../db/data-source";
import { Livro } from "../model/livro";

class LivroRepository {
    livroRepository = AppDataSource.getRepository(Livro);

    async createLivro(livro: Livro): Promise<Livro> {
        try {
            return await this.livroRepository.save(livro);
        } catch (error) {
            throw new Error(`Erro ao cadastrar o livro: ${error}`);
        }
    }

    async getLivroById(id: number): Promise<Livro | null> {
        try {
            return await this.livroRepository.findOneBy({ id: id });
        } catch (error) {
            throw new Error(`Erro ao buscar o livro por ID: ${error}`);
        }
    }
     
    async getAllLivro(): Promise<Array<Livro>> {
        try {
            return await this.livroRepository.find();
        } catch (error) {
            throw new Error(`Erro ao buscar todos os livros: ${error}`);
        }
    }

    async updateLivro(livro: Livro): Promise<void> {
        try {
            await this.livroRepository.save(livro);
        } catch (error) {
            throw new Error(`Erro ao atualizar o livro: ${error}`);
        }
    }

    async deleteLivro(id: number): Promise<void> {
        try {
            await this.livroRepository.delete(id);
        } catch (error) {
            throw new Error(`Erro ao deletar o livro: ${error}`);
        }
    }

    
        
}

export default new LivroRepository();

