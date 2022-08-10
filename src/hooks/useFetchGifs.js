import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    // a diferencia de un functional component donde recibiriamos las props
    // aqui recibimos literalmente un objeto o los argumentos posicionales
    // como querramos que funcionen

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        // gracias a react 18 esto no dispara dos renderizaciones
        // dispara una
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
        // getGifs(category)
        // .then( newImages => setImages(newImages));

    }, []);
  
    return {
        // images: images,
        images,
        // isLoading: true
        isLoading
    }
}
