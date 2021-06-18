export default ({ $cookies, $axios, redirect }) =>
{

    $axios.setHeader('Authorization', `Bearer ${$cookies.get('token')}`)

    // $axios.onError( async (error) => {
    //     const originalRequest = error.config;
    //     if(error.response.status === 401 && error.config && !error.config._isRetry ) {
    //         originalRequest._isRetry = true;
    //         // use default axios
    //         try{
    //             const response = await $axios.post('auth/refresh');
    //             this.$cookies.set('token', response.data.accessToken);
    //             $axios.request(originalRequest);
    //         } catch (e) {
    //             console.log(
    //                'НЕ АВТОРИЗОВАН__'+ e.response?.data?.message
    //             )
    //         }
    //     }
    //     throw error;
    // })
}
