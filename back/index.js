const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.options('*', cors());


app.use(express.json());

const router = require('./routes/index');
app.use(router);





// const idMatch = 5989254985;
// const axios = require('axios');
// const url = `https://api.opendota.com/api/matches/${idMatch}`;
// app.get('/', (req, res) =>
// {
//     axios.get(url)
//         .then(response => {
//             const dataResponse  = response.data;
//
//
//             // dataResponse['radiant_win']
//             res.send(
//                 dataResponse['players'][0]
//             );
//
//         })
//         .catch(error => {
//             console.log('ERROR_' + error)
//         })
// });
// const heroId = (players) => {
//     players.forEach( player  =>
//     {
//        return player['match_id'].hero_id
//     });
// };



app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:${8000}`)
});
