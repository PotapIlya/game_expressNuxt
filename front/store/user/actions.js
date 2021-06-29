import axios from '../../plugins/axios'
import cookie from 'cookie-universal-nuxt'

export default
{
    async AXIOS_CHECK_AUTH ({  commit  }) {
        // try {
        //     const response = await axios.post('auth/refresh')
        //     console.log(response, 11)
        //     if (response.data.accessToken)
        //     {
        //         cookie.set('token', response.data.accessToken);
        //         commit('setAuth', true);
        //         commit('setUser', response.data.user);
        //         console.log('Success accessToken...');
        //     } else{
        //         console.log('No accessToken')
        //     }
        // } catch (e) {
        //     console.log(
        //         e.response?.data?.message
        //     )
        // }
        //.finally()
        // try{}
        // catch (e) {}
        // finally {}

    }
}
