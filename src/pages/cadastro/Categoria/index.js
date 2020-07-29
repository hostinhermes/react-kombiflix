import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const initialValues = {
        name: "",
        description: "",
        color: ""
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event){        
        setValue(event.target.getAttribute('name'), event.target.value);
    }

    return (
      <PageDefault>
          <h1>Cadastro de Categoria: {values.name}</h1>
          <form onSubmit={function handleSubmit(event) {
              event.preventDefault();
              setCategorias([
                  ...categorias,
                  values

              ])
              setValues(initialValues)
          }}>
                <FormField
                    label='Nome'
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={handleChange} />
                
                <FormField
                    label='Descrição'
                    name='description'
                    type='textarea'
                    value={values.description}
                    onChange={handleChange} />

                <FormField
                    label='Cor'
                    name='color'
                    type='color'
                    value={values.color}
                    onChange={handleChange} />
 
                <div>
                    <button>
                        Cadastrar
                    </button>
                </div>
          </form>
          <ul>
              {categorias.map((categoria, indice) =>{
                  return(
                      <li key={`${categoria}${indice}`}>{categoria.name}</li>
                  )
              })}
          </ul>
          <Link to='/cadastro/video'>
              Cadastrar Vídeo
          </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;