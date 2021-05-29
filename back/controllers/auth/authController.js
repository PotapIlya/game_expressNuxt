const AuthModel = require('../../models/auth/auth');


exports.register =  (req, res) =>
{
    AuthModel.register(req.body, (err, docs) => {
        if (err) {
            console.log(err, 'Error');
            return res.status(500).send(err) ;
        }
        res.json(docs);
    });
};
exports.login =  (req, res) =>
{
    AuthModel.login(req.body, (err, docs) => {
        if (err) {
            console.log(err, 'Error');
            return res.status(500).send(err) ;
        }
        res.json(docs);
    });
};
exports.logout =  (req, res) =>
{
    AuthModel.logout(req.body, (err, docs) => {
        if (err) {
            console.log(err, 'Error');
            return res.status(500).send(err) ;
        }
        res.json( docs );
    });
};


