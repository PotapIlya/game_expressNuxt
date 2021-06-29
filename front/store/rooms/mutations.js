export default
{
    addRooms(state, room){
        if (Array.isArray(room)){
            state.rooms = room;
        } else{
            state.rooms = [...state.rooms, room];
        }
    },
}
