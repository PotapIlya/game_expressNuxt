
const roomsModel = require('./../models/game/rooms')

exports.getAll =  (req, res) =>
{
    roomsModel.getAll(req.body, (data, error = null) =>
    {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    })
};
exports.store =  (req, res) =>
{
    roomsModel.store(req.body, (data, error = null) =>
    {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    })
};
exports.join =  (req, res) =>
{
    roomsModel.join(req.body, (data, error = null) =>
    {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    })
};
exports.checkRoom =  (req, res) =>
{
    roomsModel.checkRoom(req.body, (data, error = null) =>
    {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    })
};
exports.storeGameRoom =  (req, res) =>
{
    roomsModel.storeGameRoom(req.body, (data, error = null) =>
    {
        if (error) {
            console.log(error, 'ERROR');
            return res.status(500).send(error) ;
        }
        res.json(data);
    })
};
