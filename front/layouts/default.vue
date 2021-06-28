<template>
    <div class="mainWrapper">

        <h2 v-if="getUser.id">{{ getUser.name }}</h2>
        <h2 v-else>Авторизуйтесь...</h2>

        <Nuxt />

        <button @click="getUsers">Get Users</button>

        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>

    </div>
</template>
<script>
    import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex';
export default {
    data: () => ({
        users: [],
    }),
    computed: {
        ...mapGetters('user', ['getUser'])
    },
    methods: {
        ...mapMutations('user', ['setUser', 'setAuth']),
        async getUsers()
        {
            this.$axios.get('auth/users')
                .then(res => {
                    this.users = res.data;
                })
                .catch(e => {
                    console.log(
                        e.response?.data?.message
                    )
                })
        }
    },
    async mounted() {

        this.$axios.post('auth/refresh')
            .then(response => {
                console.log(response)
                if (response.data.accessToken) {
                    this.$cookies.set('token', response.data.accessToken);
                    this.setAuth(true);
                    this.setUser(response.data.user);
                    console.log('Success...');
                } else{
                    console.log('No accessToken')
                }
            })
            .catch(e =>{
                console.log(
                    e.response?.data?.message
                )
            }) //.finally()
        // try{}
        // catch (e) {}
        // finally {}

    }

}
</script>
