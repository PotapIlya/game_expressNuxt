const ApiError = require('./../exeptions/apiError')
const tokenService = require('./../services/auth/tokenService')

module.exports = async (req, res, next) =>
{
    try {

        // $axios.setHeader('Authorization', `Bearer ${$cookies.get('token')}`) => так доклеиваю на фронте

        const authHeader = req.headers.authorization;
        if (!authHeader){
            return next( ApiError.unauthorizedError() );
        }

        const accessToken = authHeader.split(' ')[1];
        if (!accessToken){
            return next( ApiError.unauthorizedError() );
        }

        const userData = await tokenService.validateAccessToken(accessToken);
        if (!userData){
            return next( ApiError.unauthorizedError() );
        }

        req.user = userData;
        next();

    } catch (e) {
        return next( ApiError.unauthorizedError() );
    }
}
