const { AuthToken } = require('./../../database/schema/index');

/*
Изолировать, чтобы эта функция только токен генерировала
 */

exports.generate = (userId) =>
{
    if (!userId){
        return 'AuthToken requires a user ID';
    }

    let token = '';

    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 15; i++) {
        token += possibleCharacters.charAt(
            Math.floor(Math.random() * possibleCharacters.length)
        );
    }

    const create = AuthToken.create({
        'UserId' : userId,
        'token' : token,
    });
    if (create){
        return token;
    } else{
        return 'Error add database token';
    }
};
