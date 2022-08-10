
 export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pPPKnFtGPiGGcXZZMJQ06Z1W8YjQcy5F&q=${ category }&limit=10`;

    const resp = await fetch( url );
    // el [] es para asegurarnos de que siempre tengamos data
    const { data = [] } = await resp.json();

    // regresamos un objeto 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}