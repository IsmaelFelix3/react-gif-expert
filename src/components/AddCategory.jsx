import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => { 
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // aqui vamos a tener todas las categorias en el estado actual
        // setCategories( categories => [ ...categories, inputValue ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    } 

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
        <input type="text"
               placeholder="Buscar Gifs"
               value={ inputValue } 
            //    onChange={ (event) => onInputChange(event) }
               onChange={ onInputChange }
        />
    </form>
    
  )
}

// aqui los atributos del html son conocidos como properties
// ya que esto no es HTML

// los fragmentos se usan cuando tenemos elementos o mas de un elemento
// que va a ser el nodo root de ese componente, en este caso el form es el unico
// elemento que estoy regresando y dentro del form puedo contener cualquier
// cantidad de inputs, loque no es permitido es tener elementos hermanos siempre
// debe de haber un padre para eso se usa el fragmento

// el comportamiento por defecto de un formulario es hacer un full 
// refresh del navegador, hace la propagacion de nuestro formulario

// estamos respetando las practicas de react de que todos los cambios
// sean en una sola via es decir evitar el two way data binding

// este es uno de los casos en el que el use state nos permite mandar un 
// call back y es muy conveniente