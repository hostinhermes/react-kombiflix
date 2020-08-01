import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

async function getAllVideos() {
  return fetch(`${URL_VIDEOS}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const reposta = await respostaDoServer.json();
        return reposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

async function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoVideo),
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
  getAllVideos,
  create,
};
