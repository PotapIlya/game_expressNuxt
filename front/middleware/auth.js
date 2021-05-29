export default ({ store, redirect }) =>
{
    // if (store.state.token === null) {
    //     return redirect('/auth/login')
    // }
    console.log( sessionStorage.getItem('token'))
    if ( sessionStorage.getItem('token') ) {

    } else{
        return redirect('/auth/login')
    }
}




// export default function({ app, error }) {
//     console.log(
//         app
//     )
//     const hasToken = !!app.$apolloHelpers.getToken();
//
//     if (!hasToken) {
//         error({ errorCode: 503, message: 'You are not allowed to see this' })
//     }
// }
