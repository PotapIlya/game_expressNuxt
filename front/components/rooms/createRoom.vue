<template>
    <div>
        <label for="">
            <input type="text" required v-model="inputName">
        </label>
        <button class="btn btn-success" @click="save">Save</button>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    export default {
        name: 'createRoom',
        data: () => ({
            inputName: '',
        }),
        methods: {
            ...mapActions('rooms', ['AXIOS_CREATE_ROOM']),
            ...mapMutations('rooms', ['addRooms']),
            async save() {
                // вынести в store
                if (this.inputName !== '')
                {
                    this.$axios.post('rooms/create', {
                        name: this.inputName
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data){
                            this.addRooms(res.data)
                            this.$router.push('/game/'+res.data.id)
                        }
                    })
                    .catch(e => {
                        console.log(e.response?.data?.message)
                    })
                    // this.AXIOS_CREATE_ROOM({
                    //     axios: this.$axios,
                    //     name: this.inputName
                    // });
                }
            }
        }
    }
</script>
