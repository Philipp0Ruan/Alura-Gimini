function pesquisar(){


let section = document.getElementById("resultados-pesquisa")
let resultados = ""

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa == "") {
   section.innerHTML = "<p>Preencha o campo acima</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
let titulo = ""
let descricao = ""
let fundador = ""
let criado = ""

//console.log("campo-pesquisa")

for (let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    fundador = dado.fundador.toLowerCase()
    criado = dado.criado.toLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || fundador.includes(campoPesquisa) || criado.includes(campoPesquisa)){
    resultados += `
    <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p> 
        <p class="descricao-meta">${dado.fundador} - ${dado.criado}</p>
        <a href="${dados.link}" target="_blank">Link Para o Site oficial</a>
    </div>
    `}
};

if (!resultados){
     resultados = "<p>Nada foi encotrado</p>"
}

section.innerHTML = resultados
}
