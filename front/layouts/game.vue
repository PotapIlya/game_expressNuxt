<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer" mobile-break-point="650">
            <v-list subheader>
                <v-subheader>Users in room</v-subheader>

                <v-list-item v-for="(u, index) in users" :key="`user-${index}`" @click.prevent>
                    <v-list-item-content>
                        <v-list-item-title v-text="u.name"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon :color="u.id === user.id ? 'primary' : 'grey'">mdi-account-circle-outline</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <NuxtLink to="/">Home page</NuxtLink>
            <v-toolbar-title>
                Room
                <v-chip color="grey">{{ user.room }}</v-chip>
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
    import { mapState, mapGetters, mapMutations } from "vuex";

    export default {
        middleware: "auth",
        data: () => ({
            drawer: true,

            logoutUrl: 'http://localhost:3001/auth/logout',
        }),
        sockets: {
            updateUsers(users) {
                this.updateUsers(users);
            },
            newMessage(msg) {
                this.newMessage(msg);
            },
        },
        computed:{
            ...mapState(["user", "users"]),
            ...mapGetters('user', ['getUser', 'getToken'])
        },
        mounted() {
            console.log(this.getToken)
        },
        methods: {
            ...mapMutations(["clearData", "updateUsers", "newMessage"]),
            ...mapMutations('user', ["deleteUser"]),

            die() {
                this.$axios.post(this.logoutUrl, {
                    token: this.getUser.token,
                })
                .then(res => {
                    if ( !Object.keys(res.data).length ){ // {}
                        this.deleteUser();
                        this.$router.push("auth/login");
                    } else{
                        console.log('ERROR')
                    }
                })
                .catch(error => {
                    console.log('ERROR_'+error)
                })

                // this.$socket.emit("userLeft", () => {
                //     this.$router.push("/?message=leftChat");
                //     this.clearData();
                // });
            }
        },
        created() {
            // this.$socket.emit("joinRoom", this.user)
        }
    };
</script>