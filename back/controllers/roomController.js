// const authService = require('./../../services/auth/authService');
// const tokenService = require('./../../services/auth/tokenService');
// const { validationResult } = require('express-validator');
// const apiError = require('./../../exeptions/apiError')
const roomsService = require('./../services/roomsService')

class RoomsController
{
    async all(req, res, next){
        try {

            const data = await roomsService.all();

            return res.json(data);
        } catch (e) {
            next(e);
        }
    }
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const { refreshToken } = req.cookies;
            const data = await roomsService.create(name, refreshToken);

            return res.json(data);

        } catch (e) {
            next(e);
        }
    }

}


module.exports = new RoomsController();
