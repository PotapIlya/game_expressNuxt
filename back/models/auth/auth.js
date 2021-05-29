const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');

const { Users,AuthToken } = require('../../database/schema/index');

const token = require('./../../services/auth/token');

exports.register = async  (data, cb) =>
{
    let error = null;
    Users.findOne({
        where: {
            email: data.data.email
        }
    }).then(user => {
        if (!user)
        {
            bcrypt.hash(data.data.password, 10, (err, hash) => {
                Users.create({
                    email: data.data.email,
                    password: hash,
                })
                .then(user => {
                    cb(error, user)
                })
                .catch(err => {
                    error = err
                })
            })
        }
        else{
            error = 'Пользователь уже существует ';
            cb(error, user)
        }
    });
};

exports.login = async  (data, cb) =>
{
    let error = null;
    Users.findOne({
        where: {
            email: data.data.email
        }
    }).then(user =>
    {
        if (user)
        {
            if (bcrypt.compareSync(data.data.password, user.password))
            {
                cb( null, {
                    user: user,
                    token: token.generate(user.id)
                } )
            }
            else{
                cb('Неверный пароль', user)
            }
        }
        else{
            cb('Пользователь не найден', user)
        }
    })
};


exports.logout =  (token, cb) =>
{
    let error = null;

    const destroy = AuthToken.destroy({
        where: {
            token: token
        }
    });
    if ( destroy ){
        cb(error, destroy)
    } else{
        cb('Error destroy', destroy)
    }

};


// Users.authorize = (userId) =>
// {
//     return AuthToken.generate(userId);
// };
