const con = require('../database/connect');

module.exports = {

    lista (req, res) {
        con.query('select * from tbl_mercado_97 limit 2;', (error, results, fields) => {
            if (error == null) {
                
                if (results.length >= 1) {
                    res.json({message: 'ok', resultado: results});
                
                } else {
                    res.json({message: 'Sem Produtos'});
                }
            
            } else {
                res.json({ message: 'Ocoreu um problema'});
            }
            res.json({message: 'ok', resultado: results});
        } )
    },
    
    pesquisa (req, res) {
        const { pesquisaTxt } = req.body;

        if (telefone.length >= 9 && senha >= 6) {
            
            con.query('select * from produtos where nome like %?%;', pesquisaTxt, (error, results, fields) => {
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
