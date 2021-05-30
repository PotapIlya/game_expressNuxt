export default
{
    setRoomId(state, id)
    {
        state.user = id;
    },
    updateArrayUsersRoom(state, array)
    {
        state.arrayUsersRoom = array;
        // state.arrayUsersRoom = [...state.arrayUsersRoom, array];
    },

}