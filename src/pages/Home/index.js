import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then((categoriasComVideos) => {
        setInitialData(categoriasComVideos);
      }).catch((error) => {
        console.log(error);
        toast.error('Ops! Não conseguimos carregar a lista de vídeos! Tente novamente mais tarde.');
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription="Casal de Joinville coloca a mão na massa e faz sua própria Kombi Home"
              />
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
