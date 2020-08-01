import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

async function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const reposta = await respostaDoServer.json();
        return reposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}
async function getAllCategories() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const reposta = await respostaDoServer.json();
        return reposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}
async function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDaCategoria),
    })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const reposta = await respostaDoServer.json();
        return reposta;
      }
      throw new Error('Não foi possível salvar os dados');
    });
}
export default {
  getAllCategoriesWithVideos,
  getAllCategories,
  create,
};
