<template>
    <aside>
        <div>
            <h3>Login Anon</h3>
            <button class="button" @click="loginAnonimous()">ANON</button>
        </div>
        <div>
            <div v-if="newUser">
                <h3>SignUp Email</h3>
                <a href="#" @click="newUser = false">Returning user?</a>
            </div>
            <div v-else>
                <h3>LogIn Email</h3>
                <a href="#" @click="newUser = true">New user?</a>
            </div>
            <input v-model="email" type="email" placeholder="email" class="input">
            <input type="text" v-model="password" placeholder="password" class="input">
            <!-- 2. add conditional loading class -->
            <button @click="signInOrCreateUser()" :class="{ 'is-loading': loading }" class="button">
                {{ newUser ? 'SIGNUP' : 'LOGIN' }}
            </button>
        </div>
    </aside>
</template>

<script>
import { defineComponent } from 'vue';
import { auth } from '../firebase'
import { signInAnonymously } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default defineComponent({    
    data() {
        return {
            auth,
            email: '',
            password: '',
            newUser: false,
            // 1. set starting loading state
            loading: false 
        }
    },
    methods: {
        loginAnonimous() {
            signInAnonymously(auth)
            .then(() => {})
        },
        async signInOrCreateUser() {
            // 3. toggle state based on status of the promise
            this.loading = true

            if (this.newUser) {
                await createUserWithEmailAndPassword(auth, this.email, this.password)
            } else {
                await signInWithEmailAndPassword(auth, this.email, this.password)
            }

            this.loading = false
        }
    }
})
</script>
