const { Users } = require('./../../database/schema/index')
const bcript = require('bcrypt');
const tokenService = require('./tokenService')

class AuthService
{
    async register(name, password)
    {
        Users.findOne({
            where: {
                name: name
            }
        })
            .then( async (user) => {
                if (user){
                    throw new Error(`Пользователь с именем ${name} уже существует`);
                }

                await Users.create({
                    name: name,
                    password: await bcript.hash(password, 3),
                })
                    .then(async (newUser) => {
                        const tokens = tokenService.generateTokens(newUser.name);
                        await tokenService.saveToken(user.id, tokens.refreshToken);

                        return {
                            ...tokens,
                            user: newUser
                        }
                    })
                    .catch(error => {
                        throw new Error(error)
                    })

            })
            .catch(error => {
                throw new Error('ERROR__'+ error)
            })
    }
}

module.exports = new AuthService();