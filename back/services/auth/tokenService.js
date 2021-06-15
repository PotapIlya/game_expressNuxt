const jwt = require('jsonwebtoken');
const { AuthToken } = require('./../../database/schema/index')

class TokenService
{
    generateTokens(payload)
    {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken)
    {
        AuthToken.findOne({
            where: {
                token: refreshToken
            }
        })
            .then( async (token) => {
                if (token){
                    return await token.update({ token: refreshToken });
                }
                return await AuthToken.create({
                    UserId: userId,
                    token: refreshToken
                })

            })
            .catch(error => {
                throw new Error(error)
            })
    }
}

module.exports = new TokenService();