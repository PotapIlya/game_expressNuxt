<template>
    <nuxt />
</template>

<script>
    import { mapMutations, mapGetters, mapActions } from 'vuex';
    export default {
        name: 'login',
        layout: "login",
        methods: {
            ...mapMutations('user', ['setUser', 'setAuth']),
        },
        async mounted() {

        }
    }
</script>
