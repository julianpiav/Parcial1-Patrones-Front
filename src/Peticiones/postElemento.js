
export const postElemento = async (elemento) => {

    const url = 'http://137.184.20.96:30002/elemento/crear'
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ valor: elemento })
    });
    const respuesta = await resp.text();
    console.log(respuesta)

}