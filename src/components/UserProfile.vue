<template>
    <div>
        <p>Hi {{ user.uid }}</p>
        <!-- AUTH6. on signout, firebase will trigger onAuthStateChanged -->
        <button @click="auth.signOut()">ByeBye</button>
    </div>
</template>

<script>
import { auth } from '../firebase'

export default {
    data() {
        return {
            auth
        }
    },
    // AUTH5. 'user' prop will be passed when component is used
    props: ['user']
}
</script>