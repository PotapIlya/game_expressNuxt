<template>
    <div>
        <h2>Login</h2>
        <label for="">
            <input type="text" required v-model="inputName">
        </label>
        <label for="">
            <input type="text" required v-model="inputPassword">
        </label>
        <button class="btn btn-success" @click="send">Send</button>


        <button @click="$router.push('/auth/register')" class="h2 btn btn-info">Register</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "login",
        layout: "login",
        middleware: ['guest'],
        data: () => ({
            inputName: '',
            inputPassword: '',

            url: 'http://localhost:3001/auth/login'
        }),
        methods:{
            ...mapMutations('user', ['setToken']),
            send()
            {
                if (this.inputName !== '' && this.inputPassword !== '')
                {
                    this.$axios.post(this.url, {
                        name: this.inputName,
                        password: this.inputPassword,
                    })
                        .then(res => {
                            if (res.data.token)
                            {
                                this.setToken(res.data.token); // state
                                this.$cookies.set('token', res.data.token)
                                this.$router.push("/rooms");
                            }
                        })
                        .catch(error => {
                            console.log('Error_' + error)
                        })
                }
            }
        }
    }
</script>
