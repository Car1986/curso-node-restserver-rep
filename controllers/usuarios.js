const { response, request } = require('express');

const usuariosGet = (req = request, res) => {

    const {q, nombre = 'No name', apikey, page, limit } = req.query;

    res.json({                
        msg: 'get Api - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({                
        msg: 'put Api - Controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({                
        msg: 'post Api - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {

    res.json({                
        msg: 'delete Api - Controlador'
    });
}

const usuariosPatch = (req, res) => {

    res.json({                
        msg: 'patch Api - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}