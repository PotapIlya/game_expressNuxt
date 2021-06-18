export default
{
    setRoomId(state, id)
    {
        state.user = id;
    },
    updateArrayUsersRoom(state, array)
    {
        state.arrayUsersRoom = array;
    },

    changeStatusLoadingRival(state)
    {
        state.statusLoadingRival = !state.statusLoadingRival;
    },
    changeStatusAnswerRival(state)
    {
        state.statusAnswerRival = !state.statusAnswerRival;
    },


    setSelectNumber(state, number){
        state.selectNumber = number;
    }

}