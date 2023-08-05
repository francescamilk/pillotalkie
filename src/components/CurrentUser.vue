<template>
    <slot name="user" :user="user"></slot>
</template>

<script>
import { auth } from '../firebase'
import { ref } from 'vue'

export default {
    setup() {
        const user = ref(null)
        // AUTH2. function is listening to changes in state from firebase auth 
        // such changes set the value of 'user', that will be exported from the template
        const unsubscribe = auth.onAuthStateChanged(firebaseUser => user.value = firebaseUser)

        return {
            user,
            unsubscribe
        }
    },

    unmounted() {
        this.unsubscribe()
    }
}

</script>