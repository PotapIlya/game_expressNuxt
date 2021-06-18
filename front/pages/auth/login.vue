<template>
    <div>
        <h2>Login</h2>
        <label for="">
            <input type="text" required v-model="data.inputName">
        </label>
        <label for="">
            <input type="text" required v-model="data.inputPassword">
        </label>
        <button class="btn btn-success" @click="send">Send</button>

        <button @click="$router.push('/auth/register')" class="h2 btn btn-info">Register</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "login",
        // middleware: ['guest'],
        data: () => ({
            data: {
                inputName: 'tester',
                inputPassword: 'testertester',
            },
        }),
        methods:{
            ...mapMutations('user', ['setUser', 'setAuth']),
            async send()
            {
                if (this.data.inputName !== '' && this.data.inputPassword !== '')
                {
                    const data = this.$axios.post('auth/login', {
                        name: this.data.inputName,
                        password: this.data.inputPassword,
                    }).then(response => {
                        if (response.data.accessToken) {

                            this.$cookies.set('token', response.data.accessToken);
                            this.$axios.setHeader('Authorization', `Bearer ${this.$cookies.get('token')}`)

                            this.setAuth(true);
                            this.setUser(response.data.user);
                            console.log('Success...');
                        } else{
                            console.log('No accessToken')
                        }
                    }).catch(e => {
                        console.log(
                                e.response?.data?.message
                            )
                    })

                    // try {
                    //     const response  = await AuthService.login(this.data);
                    //     console.log(response)
                    //     if (response.data.accessToken) {
                    //         this.$cookies.set('token', response.data.accessToken);
                    //         this.setAuth(true);
                    //         this.setUser(response.data.user);
                    //         console.log('Success...');
                    //     } else{
                    //         console.log('No accessToken')
                    //     }
                    // } catch (e) {
                    //     console.log('error')
                    //     console.log(
                    //         e.response?.data?.message
                    //     )
                    // }

                }
            },
        }
    }
</script>
