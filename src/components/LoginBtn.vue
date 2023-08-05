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
            <input type="password" v-model="password" placeholder="password" class="input">
            <button @click="signInOrCreateUser()" :class="{ 'is-loading': loading }" class="button">
                {{ newUser ? 'SIGNUP' : 'LOGIN' }}
            </button>
            <p class="has-text-danger" v-if="errorMessage">
                {{ errorMessage }}
            </p>
        </div>
        <div>
            <h3>Sign Up with Phone</h3>
            <div v-if="!confirmationResult">
                <input v-model="phoneNumber" type="tel" placeholder="Phone Number">
                <button @click="sendVerificationCode">Send Code</button>
            </div>
            <div v-else>
                <input v-model="verificationCode" type="text" placeholder="Verification Code">
                <button @click="verifyCode">Verify</button>
            </div>
            <div id="recaptcha-container"></div> <!-- This is where reCAPTCHA will be rendered -->
        </div>
    </aside>
</template>

<script>
import { defineComponent } from 'vue'
import { auth, RecaptchaVerifier } from '../firebase'
import { signInAnonymously } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithPhoneNumber } from 'firebase/auth'

export default defineComponent({    
    data() {
        return {
            auth,
            email: '',
            password: '',
            newUser: false,
            loading: false,
            errorMessage: '',
            phoneNumber: '',
            verificationCode: '',
            confirmationResult: null
        }
    },
    methods: {
        loginAnonimous() {
            signInAnonymously(auth)
            .then(() => {})
        },
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
        },
        async sendVerificationCode() {
            try {
                const appVerifier = new RecaptchaVerifier('recaptcha-container', {
                    'size': 'normal',
                    'callback': () => {
                        this.onSignInSubmit();
                    }
                });
                
                this.confirmationResult = await signInWithPhoneNumber(auth, this.phoneNumber, appVerifier);
            } catch (error) {
                console.error('Error sending verification code:', error);
            }
        },
        async verifyCode() {
            try {
                const userCredential = await this.confirmationResult.confirm(this.verificationCode);
                const user = userCredential.user;
                console.log('Phone number signup successful:', user);
                // Proceed with user handling, e.g., storing user data
            } catch (error) {
                console.error('Error verifying code:', error);
            }
        },
        onSignInSubmit() {
            // Handle reCAPTCHA solved event if needed
        }    }
    })
</script>
