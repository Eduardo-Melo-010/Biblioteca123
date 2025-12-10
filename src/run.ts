import axios from "axios";

const API_URL = "http://localhost:3000/biblioteca/livro";

async function runCRUD() {
  try {
    // 1️⃣ Criar um livro (POST)
    const novoLivro = {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      isbn: "9780261102385",
      anoPublicacao: 1954,
      disponivel: true,
    };
    const createRes = await axios.post(API_URL, novoLivro);
    console.log("Livro criado:", createRes.data);

    /*const livroId = createRes.data.id;

    // 2️⃣ Ler todos os livros (GET)
    const listRes = await axios.get(API_URL);
    console.log("Lista de livros:", listRes.data);

    // 3️⃣ Ler um livro específico (GET by ID)
    const getRes = await axios.get(`${API_URL}/${livroId}`);
    console.log("Livro buscado por ID:", getRes.data);

    // 4️⃣ Atualizar o livro (PUT)
    const updateLivro = { titulo: "O Senhor dos Anéis - Atualizado" };
    const updateRes = await axios.put(`${API_URL}/${livroId}`, updateLivro);
    console.log("Livro atualizado:", updateRes.data);

    // 5️⃣ Deletar o livro (DELETE)
    const deleteRes = await axios.delete(`${API_URL}/${livroId}`);
    console.log("Livro deletado:", deleteRes.data);*/

  } catch (error: any) {
    console.error("Erro no CRUD:", error.message);
  }
}

// Executa o CRUD
runCRUD();

