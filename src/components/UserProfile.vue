<template>
    <div>
        <p>Hi {{ user.uid }}</p>
        <button @click="auth.signOut()" class="button">ByeBye</button>
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
    props: ['user']
}
</script>