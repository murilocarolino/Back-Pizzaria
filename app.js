const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use((request,response,next) =>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())
    
    next();
})


app.get('/todasCategorias', cors(), async function(request,response,next){

    let categoria = require ('./modulo/funcoes.js');
    let categorias = categoria.listarCategorias();

        response.json(categorias);
        response.status(200);
    
} )



app.get('/todosProdutos', cors(), async function(request,response,next){

    let produto = require ('./modulo/funcoes.js');
    let produtos = produto.listarProdutos();

        response.json(produtos);
        response.status(200);
    
} )

app.get('/todosUsuarios', cors(), async function(request,response,next){

    let usuario = require ('./modulo/funcoes.js');
    let usuarios = usuario.listarUsuarios();

        response.json(usuarios);
        response.status(200);
    
} )

app.get('/produtosAvaliados', cors(), async function(request,response,next){

    let produto = require ('./modulo/funcoes.js');
    let produtos = produto.produtosBemAvaliados();

        response.json(produtos);
        response.status(200);
    
} )


app.get('/produtosEspecificos/:id', cors(), async function(request,response,next){

    let mostrarProdutosEspecificos = request.params.id
    
        let produtoEspecifico = require ('./modulo/funcoes.js');
        let produtoEspecificos = produtoEspecifico.produtoEspecifico(mostrarProdutosEspecificos);
    
            response.json(produtoEspecificos);
            response.status(200);
        
    } )


app.get('/usuarioEspecificos/:id', cors(), async function(request,response,next){

        let mostrarUsuariosEspecificos = request.params.id
        
            let usuarioEspecifico = require ('./modulo/funcoes.js');
            let usuariosEspecifico = usuarioEspecifico.usuarioEspecifico(mostrarUsuariosEspecificos);
        
                response.json(usuariosEspecifico);
                response.status(200);
            
        } )


app.listen('8080', function(){
    console.log('API FUNCIONANDO')
})
