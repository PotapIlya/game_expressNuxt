require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/index')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express();
const PORT = process.env.PORT || 7000;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

// app.use(cors({
//     credentials: true,
//     origin: 'http://127.0.0.1:3000'
// }));
// app.options('*', cors());

app.use(errorMiddleware);



const start = async () =>
{
    try{
        //connect database
        app.listen(PORT, () => { console.log('Server listening on http://localhost:'+PORT) })
    } catch (e) {
        console.log(e)
    }
}
start();