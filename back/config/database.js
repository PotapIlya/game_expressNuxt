module.exports = {


    'mysql': {
        'database' : 'expressTest',
        'username' : 'root',
        'password' : 'root',
        'host' : 'localhost' ,
        'dialect' : 'mysql',
    },
    'postgres' : {
        'database' : process.env.DB_DATABASE || 'root',
        'username' : process.env.DB_USERNAME || 'root',
        'password' : process.env.DB_PASSWORD || 'root',
        'host' : process.env.DB_HOST || '127.0.0.1' ,
        'dialect' : 'postgres',
        'port': process.env.DB_PORT || 5432,
    }

};