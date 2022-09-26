 async function executa (){
   const idPersonagem =  pegaID ()
   const apipersonagem =  await pegaDadosApi (idPersonagem)
   mostraNaTela (apipersonagem)
}


function pegaID () {
    const idpersonagem = document.querySelector("#idpersonagem").value
    return idpersonagem
}


async function pegaDadosApi (parametroID){
    const url = "https://rickandmortyapi.com/api/character/" + parametroID
    const response = await fetch(url)
    const responseDados = await response.json()
    return responseDados
}    


function mostraNaTela (parametro){
    const imagemPersonagem = document.querySelector("#imagemPersonagem")
    const nomePersonagem = document.querySelector("#nomePersonagem")
    nomePersonagem.innerHTML = parametro.name
    imagemPersonagem.src = parametro.image

}