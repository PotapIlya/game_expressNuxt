<template>
    <div>
        <h1>
            room_{{ this.$route.params.id }}
        </h1>

        <ul v-if="test.length">
            <li v-for="item in test">{{ item }}</li>
        </ul>

        <div class="d-flex align-items-center">
            <label for="inputMessage" style="margin: 0">
                <textarea id="inputMessage" v-model="inputMessage" cols="30"></textarea>
            </label>
            <button @click="sendMessage" class="btn btn-success">Send</button>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "index",
        layout: 'game',
        middleware: ['auth'],
        data: () => ({
            inputMessage: '',
            test: [
                'dawdwa','dwadaw', 'dwadwa'
            ]
        }),
        computed:{
            ...mapGetters('user', ['getToken'])
        },
        methods: {
            sendMessage()
            {
                console.log('12')
            }
        },
        created()
        {
            // this.$axios.post('http://localhost:3001/rooms/checkRoom', {
            //     roomId: this.$route.params.id,
            //     token: this.getToken,
            // })
            //     .then(res => {
            //         console.log(res.data, 'LOG')
            //     })
            //     .catch(error => {
            //         console.log('ERROR__'+error)
            //     })
        }
    }
</script>
