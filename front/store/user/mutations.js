export default
{
    setUser(state, user)
    {
        state.user = user.user;
        state.token = user.token;
    },
    setToken(state, token){
        state.token = token;
    },
    deleteUser(state)
    {
        state.user = {};
        state.token = '';
    },
    newMessage(state, text)
    {
        state.messages = [...state.messages, text]
    },
    updateUsers(state, users) {
        state.users = users;

    },
    clearData(state)
    {
        state.user = {};
        state.messages = [];
        state.users = [];
    },
}