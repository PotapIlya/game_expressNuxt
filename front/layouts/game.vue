<template>
    <v-app>

        <!--     NAVBAR USERS   -->
<!--        <v-navigation-drawer app v-model="drawer" mobile-break-point="650">-->
<!--            <v-list subheader>-->
<!--                <v-subheader>Users in room</v-subheader>-->

<!--                <v-list-item v-for="(u, index) in getArrayUsersRoom" :key="`user-${index}`" @click.prevent>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title v-text="u.name"></v-list-item-title>-->
<!--                    </v-list-item-content>-->

<!--&lt;!&ndash;                    <v-list-item-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                        <v-icon :color="u.id === user.id ? 'primary' : 'grey'">mdi-account-circle-outline</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                    </v-list-item-icon>&ndash;&gt;-->
<!--                </v-list-item>-->
<!--            </v-list>-->
<!--        </v-navigation-drawer>-->
        <!--  END NAVBAR USERS   -->

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
<!--            <NuxtLink to="/">Home page</NuxtLink>-->
            <v-toolbar-title>
                Room
<!--                <v-chip color="grey">{{ user.room }}</v-chip>-->
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mx-1" @click="die">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container fluid style="height: 100%">
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        middleware: ['auth'],
        data: () => ({
            drawer: false,
        }),
        sockets: {
            updateArrayUsersRoom(data){
                this.updateArrayUsersRoom(data.room_user);
            },
            newMessage(data) {
                if (data.length >= 2) {
                    //
                }
            },
        },
        computed:{
            ...mapGetters('room', ['getArrayUsersRoom','getSelectNumber'])
        },
        mounted() {

        },
        methods: {
            ...mapMutations('user', ["setUser", 'setAuth']),
            ...mapMutations('room', ["updateArrayUsersRoom"]),

            die() {
                this.$axios.post('auth/logout')
                .then(res => {
                    if ( res.data ){ // {} удаление
                        this.setUser({});
                        this.setAuth(false);
                        this.$cookies.remove('token')
                        // this.$router.push("auth/login");
                    } else{
                        console.log('ERROR')
                    }
                })
                .catch(error => {
                    console.log('ERROR_'+error)
                })
            }
        },
        created()
        {
            /*
                Проверка пользователя в комнате
             */
            this.$socket.emit("joinRoom", {
                token: this.getToken,
                roomId: this.$cookies.get('room_id'),
            })
        }
    };
</script>