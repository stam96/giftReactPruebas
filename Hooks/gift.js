export const gifsApi = async (categoria)=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=IDA6e6QaO0g3yJqFRMnOYGSWZN3MGYcl&q=${categoria}`
        const resp = await fetch(url)
        const {data} = await resp.json()
        const nuevoArr = data.map((dato)=>(
            {
                id:dato.id,
                title:dato.title,
                img:dato.images.original.url
            }
        ))
        //console.log(nuevoArr)
        return nuevoArr
}