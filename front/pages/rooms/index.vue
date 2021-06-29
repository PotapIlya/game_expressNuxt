<template>
    <div>
        <h1>
            Rooms
        </h1>

        <createRoom />

        <ul v-if="getRooms.length">
            <li v-for="room in getRooms"
                class="w-25 d-flex justify-content-between align-items-center"
            >
                <span>{{ room.name }}</span>
                <button  class="btn btn-success">Join</button>
<!--                <button @click="joinRoom(room.id)" class="btn btn-success">Join</button>-->
            </li>
        </ul>


    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions  } from "vuex";
    import createRoom from '../../components/rooms/createRoom'
    export default {
        name: "index",
        components: {
            createRoom
        },
        data: () => ({

        }),
        computed:{
            ...mapGetters('rooms', ['getRooms'])
        },
        async mounted() {
            await this.AXIOS_GET_ROOMS(this.$axios);

        },
        methods: {
            ...mapActions('rooms', ['AXIOS_GET_ROOMS'])
            // ...mapMutations('room', ['setRoomId']),
            // joinRoom(roomId)
            // {
            //     this.$axios.post(this.url+'/join', {
            //         token: this.getToken,
            //         roomId: roomId,
            //     })
            //     .then(res => {
            //         if( res.data.success ){
            //             this.setRoomId(roomId);
            //             this.$cookies.set('room_id', roomId)
            //             this.$router.push('/game/'+roomId)
            //         }
            //     })
            //     .catch(error => {
            //         console.log('ERROR__'+error)
            //     })
            //
            // },
        },
        created() {
            // вынести в store
            // this.$axios.get(this.url).then(res => {
            //     if (res.data){
            //         this.arrayRooms = res.data
            //     }
            // }).catch(error => {
            //     console.log('ERROR__' + error)
            // })
        }
    }
</script>
