<template>
    <div>
        <Nuxt />
    </div>
</template>


<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapGetters('user', ['getToken'])
        },
        // created() {
        //     if (!this.getToken.length)
        //     {
        //         this.$axios.post('http://localhost:3001/auth/checkAuth', {
        //             token: 'token'
        //         })
        //             .then(res => {
        //                 if (res.data.token){
        //                     this.setToken(res.data.token)
        //                 }
        //             })
        //             .catch(error => {
        //                 console.log('ERROR__'+error)
        //             })
        //     }
        //
        // },
        methods:{
            ...mapMutations('user', ['setToken'])
        }
    }
</script>