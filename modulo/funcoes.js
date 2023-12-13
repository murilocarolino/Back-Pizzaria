
var  pizzariaTony = require ('./pizzaria_tony.js')

const listarUsuarios = () => {
    let usuarios = pizzariaTony. usuarios
    let usuariosArray = []

    usuarios.forEach((usuarios) => {

        let usuariosInfo = {
            id: usuarios.id,
            nome: usuarios.nome,
            email: usuarios.email,
            telefone: usuarios.telefone,
            endereco: usuarios.endereco
        }

        usuariosArray.push(usuariosInfo)
    })
     
    let usuariosJSON = { usuariosArray }
    return usuariosJSON
}

const listarProdutos = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    
    let i = 0;
    while (i < produtos.length) {
        let produto = produtos[i]

        let produtoInfo = {
            id: produto.id,
            preco: produto.preco,
            nomeProduto: produto.nomeProduto,
            descricao: produto.descricao,
            imagem: produto.imagem
        };    
        
        produtosArray.push(produtoInfo)
        i++
    }

    let produtosJSON = { produtosArray }
    return produtosJSON
}

const listarCategorias = () => {
    let categorias = pizzariaTony.categorias
    let categoriasArray = []

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i]

        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nome,
            imagem: categoria.icone 
        }

        categoriasArray.push(categoriaInfo)
    }

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
}

const produtoEspecifico = (id) => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){

            let pizzaJSON = {
                nome: pizza.nomeProduto,
                id: pizza.id,
                descricao: pizza.descricao,
                avaliacao: pizza.avaliacao
            }
            
            status = true
            produtosArray.push(pizzaJSON)

        }

    })

    let produtosJSON = { produtosArray }

    if(status){
        return produtosJSON
    } else {
        return false
    }
}

const produtosBemAvaliados = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    
     produtos.forEach((pizza) => {
        
         if(pizza.avaliacao < 5){

             let pizzaJSON = {
                 nome: pizza.nomeProduto,
                 id: pizza.id,
                 avaliacao: pizza.avaliacao
             }

             produtosArray.push(pizzaJSON)

         }

     })

     let produtosJSON = { produtosArray }
     return produtosJSON
}

const usuarioEspecifico = (id) => {
    let usuarios = pizzariaTony. usuarios
    let idUsuario = id
    let usuariosInfo
    let status = false

    usuarios.forEach((usuarios) => {
        
        if (usuarios.id == idUsuario){

            usuariosInfo = {
                id: usuarios.id,
                nome: usuarios.nome,
                email: usuarios.email,
                telefone: usuarios.telefone,
                endereco: usuarios.endereco
            }

            status = true 
        }

    
    })

    if (status) {
        return usuariosInfo 
    } else {
        return false
    }
    
}


//console.log (listarCategorias());
//console.log(produtoEspecifico(2));
//console.log (produtosBemAvaliados())
//console.log (listarProdutos());
//console.log (listarUsuarios ());
//console.log (usuarioEspecifico (1));


module.exports = {
    listarCategorias,
    listarProdutos,
    listarUsuarios,
    produtosBemAvaliados,
    produtoEspecifico,
    usuarioEspecifico
}
