const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');
const { Rooms, AuthToken } = require('../../database/schema/index');


exports.getAll = async  (data, cb) =>
{
    const all = await Rooms.findAll();
    cb(all);
    // const all = Rooms.findAll();
    // if (all){
    //     cb(all)
    // } else{
    //     cb(all, 500)
    // }
};
exports.store = async (data, cb) =>
{
    AuthToken.findOne(
        {
            where: { token : data.token}
        }
    ).then( async ( token) => {
        if (token)
        {
            const create = await Rooms.create({
                UserId: token.UserId,
                name: data.name,
            })
            if (create){
                cb(create);
            }
            else{
                cb(null, 500);
            }
        } else{
            cb(null, 500);
        }
    })
};


