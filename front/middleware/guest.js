export default function ({ store, redirect })
{
    if (store.state.authenticated) {
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
