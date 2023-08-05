<template>
    <aside>
        <button class="button" @click="loginAnonimous()">SignIn</button>
    </aside>
</template>

<script>
import { auth } from '../firebase'
import { signInAnonymously } from 'firebase/auth'

export default {
    data() {
        return {
            auth
        }
    },
    methods: {
        loginAnonimous() {
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
}
</script>
