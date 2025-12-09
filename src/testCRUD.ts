import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000/biblioteca/livro';
;

async function criarLivro() {
  try {
    const novoLivro = {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano: 1954,
      editora: "Allen & Unwin"
    };

    const response = await axios.post(baseURL, novoLivro);
    console.log('✅ Livro criado com sucesso:', response.data);

  } catch (error: any) {
    console.error('❌ Erro ao criar livro:', error);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

criarLivro();
