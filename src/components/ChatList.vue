<template>
    <div>
        <button @click="createChat()">New Chat</button>
    </div>
</template>

<script>
import { db } from '../firebase'
import { ref, push } from 'firebase/database'

export default {
    methods: {
        async createChat() {
            try {
                const chatsRef = ref(db, 'chats')
                const newChatRef = push(chatsRef)
                
                await newChatRef.set({
                    createdAt: Date.now(),
                    owner: this.uid,
                    members: [this.uid],
                })
                
                console.log('Chat room created with key:', newChatRef.key)
            } catch (error) {
                console.error('Error creating chat room:', error)
            }
        },
    },
    props: ['uid']
}
</script>