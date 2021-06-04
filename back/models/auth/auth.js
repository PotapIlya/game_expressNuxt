const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');

const { Users,AuthToken } = require('../../database/schema/index');

const { generateToken } = require('./../../services/auth/token');


exports.register = async  (data, cb) =>
{
    Users.findOne({
        where: {
            name: data.name
        }
    }).then(user => {
        if (!user)
        {
            bcrypt.hash(data.password, 10, (err, hash) => {
                Users.create({
                    name: data.name,
                    password: hash,
                })
                .then(user => {
                    cb(user)
                })
                .catch(error => {
                    cb(null, error)
                })
            })
        }
        else{
            cb(null, 'Пользователь уже существует ');
        }
    });
};

exports.login = async  (data, res, cb) =>
{
    Users.findOne({
        where: {
            name: data.name
        }
    }).then(user =>
    {
        if (user)
        {
            if (bcrypt.compareSync(data.password, user.password))
            {
                const authToken = generateToken(user.id);
                // res.cookie('token', '228', {})

                // res.cookie('token', authToken, {
                // maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                //     httpOnly: true, // The cookie only accessible by the web server
                // signed: true // Indicates if the cookie should be signed
                // });
                cb({
                    user: user,
                    token: authToken
                })
            }
            else{
                cb(null, 'Неверный пароль');
            }
        }
        else{
            cb(null, 'Пользователь не найден');
        }
    })
};


exports.logout =  (data, cb) =>
{
    const destroy = AuthToken.destroy({
        where: {
            token: data.token
        }
    });
    if ( destroy ){
        cb(destroy)
    } else{
        cb(null, 'Error destroy')
    }

};
