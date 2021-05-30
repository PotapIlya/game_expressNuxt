<template>
    <div>
        <h1>
            Rooms
        </h1>

        <ul v-if="arrayRooms.length">
            <li v-for="room in arrayRooms"
                class="w-25 d-flex justify-content-between align-items-center"
            >
                <span>{{ room.name }}</span>
                <button @click="joinRoom(room.id)" class="btn btn-success">Join</button>
            </li>
        </ul>

        <div>
            <label for="">
                <input type="text" required v-model="inputName">
            </label>
            <button class="btn btn-success" @click="save">Save</button>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapMutations  } from "vuex";
    export default {
        name: "index",
        layout: 'auth',
        middleware: ['auth'],
        data: () => ({
            url: 'http://localhost:3001/rooms',

            arrayRooms: [],
            inputName: '',

        }),
        computed:{
            ...mapGetters('user', ['getToken'])
        },
        methods: {
            ...mapMutations('room', ['setRoomId']),
            joinRoom(roomId)
            {
                this.setRoomId(roomId);
                this.$router.push('/game')
            },
            save()
            {
                // вынести в store
                if (this.inputName !== '')
                {
                    this.$axios.post(this.url+'/store', {
                        name: this.inputName,
                        token: this.getToken,
                    })
                        .then(res =>
                        {
                            if (res.data)
                            {
                                this.arrayRooms = [...this.arrayRooms, res.data]
                            }
                        })
                        .catch(error => {
                            console.log('ERROR__' + error)
                        })
                }
            }
        },
        created() {
            // вынести в store
            this.$axios.get(this.url)
            .then(res =>
            {
                if (res.data){
                    this.arrayRooms = res.data
                }
            })
            .catch(error => {
                console.log('ERROR__' + error)
            })
        }
    }
</script>
