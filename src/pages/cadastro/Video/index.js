/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const initialValues = {
    titulo: '',
    description: '',
    color: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);
  useEffect(() => {
    categoriasRepository.getAllCategories()
      .then((allCategories) => {
        setCategorias(allCategories);
      }).catch((error) => {
        console.log(error)
        toast.error('Ops!! Não conseguimos carregar a lista de categorias, tente novamente mais tarde!');
      });
  }, []);

  return (
      <PageDefault>
          <h1>
Cadastro de Vídeos:
{' '}
{' '}
{values.name}
          </h1>
          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setVideos([
              ...videos,
              values,

            ]);
            clearForm();
            const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
            if (!categoriaEscolhida) {
              toast.error('Informe uma categoria existente!');
            } else {
              videosRepository.create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id,
              }).then(() => {
                history.push('/');
              });
            }
          }}
          >
            <FormField
              label="Titulo"
              name="titulo"
              type="text"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="URL"
              name="url"
              type="text"
              value={values.url}
              onChange={handleChange}
            />

            <FormField
              label="Categoria"
              name="categoria"
              type="text"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

            <Button>
                Cadastrar
            </Button>
          </form>

          <Link to="/cadastro/categoria">
              Cadastrar Categoria
          </Link>
      </PageDefault>
  );
}

export default CadastroVideo;
