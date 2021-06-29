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
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        users: [],
    }),
    middleware: ['auth'],
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
}
</script>
