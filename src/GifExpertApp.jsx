// no ocupamos la importacion de react despues de la version 17 ya no es
// necesario estar importanmdo react por todos lados
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    // cuando queramos almacenar informacion y esa informacion tiene que
    // cambiar el HTML usualmente lo primero que deberiamos de pensar es
    // necesito un hook de react para mantener el estado, hay varios hooks de
    // react que mantienen el estado

    const [categories, setCategories] = useState( ['Halo Reach'] );

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory)) return;
        // setCategories(['Halo Infinite']);
        // si pongo categories haria referencia a la instancia local,  
        // aqui estamos utilizando el callback que tambien se le puede mandar a las funciones del
        // useState
        // setCategories( cat => [ ...cat, 'Halo Infinte ']);
        setCategories([ newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ value => onAddCategory(value) }
        />
        { 
            categories.map( category =>(
                    <GifGrid key={ category } category={category} />
                )) 
        }

    </>
  )
}
