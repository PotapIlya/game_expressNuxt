import axios from 'axios'


export default
{
    async fetchRooms ({ commit }) {
        try {
           const res = await this.$axios.$get('rooms/all');
           commit('addRooms', res);

        } catch (e) {
            console.log(e.response)
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
