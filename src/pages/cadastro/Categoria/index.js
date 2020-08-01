/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    description: '',
    color: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllCategories()
      .then((allCategories) => {
        setCategorias(allCategories);
      }).catch((error) => {
        console.log(error);
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
            categoriasRepository.create({
              titulo: values.titulo,
              description: values.description,
              color: values.color,
            }).then(() => {
              toast.success('Categoria cadastrada com sucesso!');
              clearForm();
            });
          }}
          >
                <FormField
                  label="Nome"
                  name="titulo"
                  type="text"
                  value={values.titulo}
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
                <li key={`${categoria.titulo}`}>
                {categoria.titulo}
                </li>
            ))}
          </ul>
          <Link to="/">
              Voltar para Home
          </Link>
      </PageDefault>
  );
}

export default CadastroCategoria;
