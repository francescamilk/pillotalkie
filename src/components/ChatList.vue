<template>
    <div>
        <button @click="createChat()" class="button">New Chat</button>
    </div>
</template>

<script>
import { getDatabase, ref, push, set, onValue } from 'firebase/database'

export default {
    data() {
        return {
            chats: []
        }
    },
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
        }
    },
    props: ['uid'],
    created() {
        try {
            const db = getDatabase()
            const chatsRef = ref(db, 'chats')
            
            this.chats = [];
            onValue(chatsRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const chat = childSnapshot.val()
                    this.chats.push(chat)
                })
            })
        } catch (error) {
            console.error('Error loading chats:', error)
        }
    }
}

</script>