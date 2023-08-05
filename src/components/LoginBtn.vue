<template>
    <aside>
        <div>
            <h3>Login Anon</h3>
            <button class="button" @click="loginAnonimous()">ANON</button>
        </div>
        <div>
            <!-- 4. use newUser for login/signup UI -->
            <div v-if="newUser">
                <h3>SignUp Email</h3>
                <a href="#" @click="newUser = false">Returning user?</a>
            </div>
            <div v-else>
                <h3>LogIn Email</h3>
                <a href="#" @click="newUser = true">New user?</a>
            </div>
            <!-- 2. add input with a two-way data binding -->
            <input v-model="email" type="email" placeholder="email" class="input">
            <input type="text" v-model="password" placeholder="password" class="input">
            <!-- 4. use newUser for login/signup UI -->
            <button @click="signInOrCreateUser()" class="button">
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
            // 1. add data properties for form values
            email: '',
            password: '',
            // 3. state to differentiate between sign-in and sign-up
            newUser: false 
        }
    },
    methods: {
        loginAnonimous() {
            signInAnonymously(auth)
            .then(() => {})
        },
        // 5. async/await auth logic
        async signInOrCreateUser() {
            if (this.newUser) {
                await createUserWithEmailAndPassword(auth, this.email, this.password)
            } else {
                await signInWithEmailAndPassword(auth, this.email, this.password)
            }
        }
    }
})
</script>
