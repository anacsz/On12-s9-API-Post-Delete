const { response } = require("express");
const { request } = require("../app");
const contatosJson = require("../models/contatos.json");



const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contatos => contatos.id == idRequirido)

    response.status(200).send(contatoFiltrado)
}


const cadastrarContatinho = (request, response) => {
    const contatinhoRequerido = request.body.nome
    const redesSociaisRequerido = request.body.redesSociais
    const celularContato = request.body.celular
    
    const novoRolo = {
        id: "12345",
        nome: contatinhoRequerido,
        celular: celularContato ,
        redesSociais: redesSociaisRequerido,
        

    };
    tarefasJson.push(novoRolo);

    response.status(200).send(novoRolo);
};

const sumirContatinho = (request, response) =>{

    const idRequerido =  request.params.id;
    const contatoFiltrado = contatosJson.find(contatos => contatos.id == idRequerido);

    const indice = contatosJson.indexOf(contatoFiltrado);

    tarefasJson.splice(indice,1);
    response.status(200).send([
        {
            "message": "Contatinho sumido com sucesso...!!! Próximooooo =D"
        },
        tarefasJson
    ])

}

module.exports = {
    getAll,
    getById,
    sumirContatinho,
    cadastrarContatinho
}