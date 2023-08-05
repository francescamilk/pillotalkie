<template>
    <div>
        <button @click="createChat()" class="button">New Chat</button>
    </div>
</template>

<script>
import { getDatabase, ref, push, set } from 'firebase/database'

export default {
    methods: {
        async createChat() {
            const db = getDatabase()
            const newChatRef = push(ref(db, 'chats'))
            const newChatData = {
                createdAt: Date.now(),
                owner: this.uid,
                members: [this.uid]
            }
            set(newChatRef, newChatData)
        },
    },
    props: ['uid']
}

</script>