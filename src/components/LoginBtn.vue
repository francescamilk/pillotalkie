<template>
    <aside>
        <button class="button" @click="loginAnonimous()">ANON</button>
    </aside>
</template>

<script>
import { defineComponent } from 'vue';
import { auth } from '../firebase'
import { signInAnonymously } from 'firebase/auth'

export default defineComponent({    
    data() {
        return {
            auth
        }
    },
    methods: {
        loginAnonimous() {
            // AUTH1. function fires authentication and triggers onAuthStateChanged
            signInAnonymously(auth)
            .then(() => {
                // Signed in
            })
            // .catch((error) => {
            //     // const errorCode = error.code;
            //     // const errorMessage = error.message;
            // });
        }
    }
})
</script>
