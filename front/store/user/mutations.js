export default
{
    setToken(state, token){
        state.token = token;
    },
    deleteToken(state)
    {
        state.token = '';
    },
}