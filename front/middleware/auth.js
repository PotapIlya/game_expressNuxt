// import axios from "axios";
//
// export default ({ store, redirect, app }) =>
// {
//     if (!store.state.user.token.length)
//     {
//         const cookieToken = app.$cookies.get('token');
//         if ( cookieToken && cookieToken.length )
//         {
//             axios.post('http://localhost:3001/auth/checkCookie', {
//                 token: cookieToken,
//             }).then( res => {
//                 if (res.data.token){
//                     store.dispatch('user/ACTION_SET_TOKEN', cookieToken)
//                 } else{
//                     redirect('/auth/login')
//                 }
//             }).catch( error => {
//                 console.log('Error check cookie__' + error)
//             })
//         } else{
//             redirect('/auth/login')
//         }
//     }
//
//
//     // if ( app.$cookies.get('room_id') ){
//     //     redirect('/game/'+app.$cookies.get('room_id'))
//     // }
//
//
// }
//
//
