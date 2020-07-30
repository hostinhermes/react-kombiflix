/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = 'https://kombiflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
      <PageDefault>
          <h1>
Cadastro de Categoria:
{' '}
{' '}
{values.name}
          </h1>
          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategorias([
              ...categorias,
              values,

            ]);
            setValues(initialValues);
          }}
          >
                <FormField
                  label="Nome"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                />

                <FormField
                  label="Descrição"
                  name="description"
                  type="textarea"
                  value={values.description}
                  onChange={handleChange}
                />

                <FormField
                  label="Cor"
                  name="color"
                  type="color"
                  value={values.color}
                  onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
          </form>
          <ul>
            {categorias.map((categoria) => (
                <li key={`${categoria.name}`}>
                {categoria.name}
                </li>
            ))}
          </ul>
          <Link to="/cadastro/video">
              Cadastrar Vídeo
          </Link>
      </PageDefault>
  );
}

export default CadastroCategoria;
