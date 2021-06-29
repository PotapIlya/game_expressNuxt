import axios from 'axios'


export default
{
    async AXIOS_GET_ROOMS ({  commit  }, axios) {
        try {
           const res =  await axios.get('rooms/all');
            console.log(res.data)
            commit('addRooms', res.data);

        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },
    async AXIOS_CREATE_ROOM ({  commit  }, data) {

            // const res = await data.axios.post('rooms/create', {
            //     name : data.inputName
            // }).then( res => {
            //     console.log(
            //         res.data
            //     )
            // }).catch(e => {
            //     e.response?.data?.message
            // })
            // const res = await data.axios.post('rooms/create', { name: data.inputName });
            // console.log(res.data)
            // commit('addRooms', [res.data])

    }
}
