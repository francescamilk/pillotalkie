<template>
    <div>
        <button @click="createChat()">New Chat</button>
    </div>
</template>

<script>
import { getDatabase, ref, set } from 'firebase/database'

export default {
    methods: {
        async createChat() {
            try {
                const db = getDatabase()
                const chat = set(ref(db, 'chats/' + this.uid), {
                    createdAt: Date.now(),
                    owner: this.uid,
                    members: [this.uid]
                })
                
                console.log('Chat room created with key:', chat.id)
            } catch (error) {
                console.error('Error creating chat room:', error)
            }
        },
    },
    props: ['uid']
}
</script>