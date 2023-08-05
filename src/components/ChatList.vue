<template>
    <div>
        <button @click="createChat()">New Chat</button>
    </div>
</template>

<script>
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default {
    methods: {
        async createChat() {
            try {
                const collectionReference = collection(db, 'collectionName')
                const newChat = await addDoc(collectionReference, {
                    createdAt: Date.now(),
                    owner: this.uid,
                    members: [this.uid],
                })
                console.log('Chat room created with ID:', newChat.id)
            } catch (error) {
                console.error('Error creating chat room:', error)
            }
        },
    },
    props: ['uid']
}


</script>