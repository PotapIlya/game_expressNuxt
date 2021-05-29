module.exports = {


    'mysql': {
        'database' : 'expressTest',
        'username' : 'root',
        'password' : 'root',
        'host' : 'localhost' ,
        'dialect' : 'mysql',
    },
    'postgres' : {
        'database' : 'game',
        'username' : 'postgres',
        'password' : '',
        'host' : 'localhost' ,
        'dialect' : 'postgres',
        'port': 5432
    }

};

// const config = {
//     'postgres' : {
//         'database' : 'postgres',
//         'username' : 'postgres',
//         'password' : 'postgres',
//         'host' : 'localhost' ,
//         'dialect' : 'postgres',
//     }
// };
// module.exports = config;
