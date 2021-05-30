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
            ...mapMutations('user', ['setUser']),
            send()
            {
                this.$axios.post(this.url, {
                    name: this.inputName,
                    password: this.inputPassword,
                })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data)
                        {
                            this.setUser(res.data);
                            this.$router.push("/rooms");
                        }
                    })
                    .catch(error => {
                        console.log('Error_' + error)
                    })
            }
        }
    }
</script>
