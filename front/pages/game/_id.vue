<template>
    <div>


        <h2 class="d-flex justify-content-center w-100"> room_{{ this.$route.params.id }}</h2>


        <div class="d-flex">

            <div class="d-flex flex-column col">

                <div class="d-flex justify-content-center">

                    <h4>Вы</h4>
                    <label  v-for="item in data"
                           :for="'image' + item.id ">
                        <input class="d-none" :id="'image' + item.id" type="radio" :value="item.id" v-model="selectCheckbox" @click="clickSelectCheckbox(item.id)">
                        <img :class="{ 'active' : item.status }" :src=" '/images/'+ item.id +'.jpg' " alt="" />
                    </label>
                </div>
                <button v-if="activeBtn" @click="sendMessage" class="btn btn-success">Send {{ selectCheckbox }}</button>
                <button v-else disabled class="btn btn-success">Send {{ selectCheckbox }}</button>
                <hr>

                <div v-if="getStatusLoadingRival">

<!--                    <div v-if="!getStatusAnswerRival">-->
<!--                        <h2>-->
<!--                            Ожидайте хода соперника-->
<!--                        </h2>-->
<!--                    </div>-->
<!--                    <div v-else>-->
                        <h4>Противник</h4>
                        <div class="d-flex justify-content-center">
                            <div v-for="item in dataRival">
                                <img :src=" '/images/'+ item.id +'.jpg' " alt="" />
                            </div>
                        </div>
<!--                    </div>-->

                </div>
                <div v-else>
                   <h2>
                       Ожидайте соперника
                   </h2>
                </div>

            </div>
            <ul class="col-2" v-if="getArrayUsersRoom.length">
                <li v-for="user in getArrayUsersRoom">
                    {{ user.name }}
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
    import { mapGetters, mapMutations  } from "vuex";
    export default {
        name: "index",
        layout: 'game',
        middleware: ['auth'],
        data: () => ({
            selectCheckbox: null,

            activeBtn: true,
            data: [
                { id: 1, status: false},
                { id: 2, status: false},
                { id: 3, status: false},
            ],
            dataRival: [
                { id: 1},
                { id: 2},
                { id: 3},
            ],
        }),
        computed:{
            ...mapGetters('user', ['getToken']),
            ...mapGetters('room', ['getArrayUsersRoom', 'getStatusLoadingRival', 'getStatusAnswerRival'])
        },
        watch: {
            getArrayUsersRoom(){
                // console.log(this.getArrayUsersRoom)
                if (this.getArrayUsersRoom.length >= 2){
                    this.changeStatusLoadingRival();
                }
            }
        },
        methods: {
            ...mapMutations('room', ['changeStatusLoadingRival', 'changeStatusAnswerRival', 'setSelectNumber']),
            clickSelectCheckbox(id){
                this.data.forEach(x => x.status = false );
                this.data.forEach(item => {
                    if (item.id === id){
                        item.status = true
                    }
                })
            },
            sendMessage()
            {
                if (this.selectCheckbox !== null){
                    this.$axios.post('http://localhost:3001/rooms/game/storeGameRoom', {
                        token: this.getToken,
                        roomId: this.$route.params.id,
                        selectCheckbox: this.selectCheckbox,
                        round: 1,
                    })
                        .then(res => {
                            if (res.data)
                            {
                                this.$socket.emit('createMessage', {
                                    roomId: this.$route.params.id,
                                },
                                    data => {
                                        this.activeBtn = false;
                                    // this.setSelectNumber(this.selectCheckbox);
                                });
                            }
                        })
                        .catch(error => {
                            console.log('ERROR__'+error)
                        })
                }
            }
        },
        created()
        {
            // this.$axios.post('http://localhost:3001/rooms/checkRoom', {
            //     roomId: this.$route.params.id,
            //     token: this.getToken,
            // })
            //     .then(res => {
            //         console.log(res.data, 'LOG')
            //     })
            //     .catch(error => {
            //         console.log('ERROR__'+error)
            //     })
        }
    }
</script>


<style>
    img{
        border: 2px solid transparent;
    }
    img.active{
        border: 2px solid red;
    }
</style>