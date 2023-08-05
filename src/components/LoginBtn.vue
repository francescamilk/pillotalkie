<template>
    <aside>
        <div>
            <div v-if="newUser">
                <a href="#" @click="newUser = false">Returning user?</a>
            </div>
            <div v-else>
                <a href="#" @click="newUser = true">New user?</a>
            </div>
            <input v-model="email" type="email" placeholder="email" class="input">
            <input type="password" v-model="password" placeholder="password" class="input">
            <button @click="signInOrCreateUser()" :class="{ 'is-loading': loading }" class="button">
                {{ newUser ? 'SIGNUP' : 'LOGIN' }}
            </button>
        </div>
        <p class="has-text-danger" v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </aside>
</template>

<script>
import { defineComponent } from 'vue'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default defineComponent({    
    data() {
        return {
            auth,
            email: '',
            password: '',
            newUser: false,
            loading: false,
            errorMessage: '',
            phoneNumber: ''
        }
    },
    methods: {
        async signInOrCreateUser() {
            this.loading = true
            this.errorMessage = ''
            try {
                if (this.newUser) {
                    await createUserWithEmailAndPassword(auth, this.email, this.password)
                } else {
                    await signInWithEmailAndPassword(auth, this.email, this.password)
                }
            } catch(error) {
                this.errorMessage = error.message
            }
            this.loading = false
        }
    }
})
</script>
