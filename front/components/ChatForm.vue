<template>
    <v-text-field
            ref="msg"
            label="Message..."
            outlined
            v-model="text"
            @click:append="send"
            @keydown.enter="send"
            append-icon="mdi-send-circle-outline"
    />
</template>

<script>
    import { mapState } from "vuex";

    export default {
        data: () => ({
            text: "",
            roomRules: [v => !!v || "Enter the room"]
        }),
        computed: {
            ...mapState(["user"])
        },
        methods: {
            send() {
                if (this.text.length) {
                    const data = {
                        text: this.text,
                        id: this.user.id
                    };

                    this.$socket.emit("createMessage", data, data => {
                            this.text = "";
                        }
                    );
                }
            }
        }
    };
</script>
