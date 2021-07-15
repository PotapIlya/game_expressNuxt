<template>
  <div v-if="$fetchState.pending">Fetching mountains...</div>
  <div v-else-if="$fetchState.error">An error occurred :(</div>
  <div v-else>
    <h1>Rooms</h1>

    <createRoom />

    <ul v-if="STORE_GET_ROOMS.length">
      <li v-for="room in STORE_GET_ROOMS"
          class="w-25 d-flex justify-content-between align-items-center"
      >
        <span>{{ room.name }}</span>
        <button @click="joinRoom(room.id)" class="btn btn-success">Join</button>
      </li>
    </ul>
  </div>
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
  async fetch() {
    const { store, error, params } = this.$nuxt.context;
    try {
      await store.dispatch('rooms/fetchRooms');
    } catch (e) {
      error({
        statusCode: 501
      });
    }
  },
  data: () => ({

  }),
  computed:{
    STORE_GET_ROOMS(){
      return this.$store.getters['rooms/STORE_GET_ROOMS'];
    }
  },
  methods: {
      // async joinRoom(roomId) {
      //     try{
      //         const res = await this.$axios.post('rooms/join', { roomId: roomId })
      //         console.log(res)
      //         if (res.data){
      //             console.log(res.data)
      //             // this.setRoomId(roomId);
      //             // this.$cookies.set('roomId', roomId)
      //             this.$router.push('/game/'+roomId)
      //         }
      //     } catch (e) {
      //         console.log( e.response?.data?.message)
      //     }
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
