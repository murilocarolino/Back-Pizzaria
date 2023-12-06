
var  pizzariaTony = require ('./pizzaria_tony.js')

const listarCategorias = () => {
    let categorias = pizzariaTony.categorias
    let categoriasArray = []
    
    categorias.forEach((categoria) => {
        
        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nome,
            imagem: categoria.icone 
        }    
        
        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
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

const listarProdutos = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    
    produtos.forEach((produtos) => {
        
        let produtosInfo = {
            id: produtos.id,
            preco: produtos.preco,
            nomeProduto: produtos.nomeProduto,
            descricao: produtos.descricao,
            imagem: produtos.imagem
        }    
        
        produtosArray.push(produtosInfo)
    })

    let produtosJSON = { produtosArray }
    return produtosJSON
}

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

const comentarios = (id) => {
    let produtos = pizzariaTony.produtos
    let comentariosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){
            pizza.comentarios.forEach ((comentarios) => {
            
                let comentariosJSON = {
                    
                    nome: usuarioEspecifico(comentarios.usuario.id).nome,
                    id: comentarios.id,
                    descricao: comentarios.descricao,
                    data: comentarios.data,
                    usuario: comentarios.usuario.id,
                    foto: comentarios.foto,
                    titulo: comentarios.message
                }
                
                status = true
                comentariosArray.push(comentariosJSON)

            })

        }

    })

    let comentariosJSON = { comentariosArray }

    if(status){
        return comentariosJSON
    } else {
        return false
    }
}


//console.log (listarCategorias());
//console.log(produtoEspecifico(2));
//console.log (produtosBemAvaliados())
//console.log (listarProdutos());
console.log (comentarios(1))
//console.log (listarUsuarios ());
//console.log (usuarioEspecifico (1));


module.exports = {
    listarCategorias,
    comentarios,
    listarProdutos,
    listarUsuarios,
    produtosBemAvaliados,
    produtoEspecifico,
    usuarioEspecifico
}
