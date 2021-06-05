<template>
    <div>
        <h2>Register</h2>
        <h2 v-if="status">
            Success
        </h2>

        <label for="">
            <input type="text" required v-model="inputName">
        </label>
        <label for="">
            <input type="text" required v-model="inputPassword">
        </label>
        <button class="btn btn-success" @click="send">Send</button>


        <button @click="$router.push('/auth/login')" class="h2 btn btn-info">Login</button>
    </div>
</template>

<script>
    export default {
        name: "register",
        layout: "login",
        middleware: ['guest'],
        data: () => ({
            inputName: '',
            inputPassword: '',

            url: 'http://localhost:3001/auth/register',
            status: false,
        }),
        methods:{
            send()
            {
                if (this.inputName !== '' && this.inputPassword !== '')
                {
                    this.$axios.post(this.url, {
                        name: this.inputName,
                        password: this.inputPassword,
                    })
                    .then(res => {
                        console.log(res.data)
                        if (res.data)
                        {
                            this.status = true;
                            setTimeout(() => {
                                this.status = false;
                            }, 2000)
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
