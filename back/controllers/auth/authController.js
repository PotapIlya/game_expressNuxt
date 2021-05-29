const AuthModel = require('../../models/auth/auth');


exports.register =  (req, res) =>
{
    AuthModel.register(req.body, (data, error = null) => {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    });
};
exports.login =  (req, res) =>
{
    AuthModel.login(req.body, res, (data, error = null) => {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        console.log(req.cookies)
        res.json(data);
    });
};
exports.logout =  (req, res) =>
{
    AuthModel.logout(req.body, (data, error) => {
        if (error) {
            console.log(error, 'Error');
            return res.status(500).send(error) ;
        }
        res.json(data);
    });
};
exports.checkAuth = (req, res) =>
{
    // check session
    res.json({
        token: '1221'
    } );
}


