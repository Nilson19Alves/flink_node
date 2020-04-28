const con = require('../database/connect');

module.exports = {

    lista (req, res) {
        con.query('select * from users;', (error, results, fields) => {
            if (error == null) {

                if (results.length >= 1) {
                    res.json({ message: 'ok', resultado: results});
                
                } else {
                    res.json({ message: 'Sem usuarios cadastrados'});
                }
            
            } else {
                res.json({ message: 'Ocoreu um problema'});
            }
        } )
    },
    
    login (req, res) {
        const { telefone } = req.body;
        const { senha } = req.body;

        if (telefone.length >= 9 && senha >= 6) {
            
            con.query('select * from users where telefone = ? and senha = ?;', [telefone, senha], (error, results, fields) => {
                if (error == null) {
                    
                    if (results.length >= 1) {
                        res.json({ message: 'ok', resultado: results});
                    
                    } else{
                        res.json({ message: 'Usuario não encontrado'});
                    }
                
                } else {
                    res.json({ message: 'Ocoreu um problema'});
                }
            })

        } else {
            res.json({message: 'Requisição invalida'});
        }

    }

}
