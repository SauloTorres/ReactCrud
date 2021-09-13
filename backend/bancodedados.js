const sequence ={
    _id : 1,
    get id(){return this._id++}
}

const usuarios = {}

function salvarUsuario(usuario){
    if(!usuario.id) usuario.id = sequence.id
    //console.log("produto.id")
    usuarios[usuario.id] = usuario
    return usuarios
}

function getUsuario(id){
    return usuarios[id] || {}
}
function getUsuarios(){
    return Object.values(usuarios)
}

function excluirUsuario(id){
    const usuario = usuarios[id]
    delete usuarios[id]
    return usuario
}

module.exports = {salvarUsuario, getUsuario, getUsuarios,excluirUsuario}