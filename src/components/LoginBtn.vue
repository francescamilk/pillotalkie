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
        <!-- <div>
            <div v-if="confirmationResult">
                <input v-model="verificationCode" type="text" placeholder="Verification Code" class="input">
                <button @click="verifyCode()" :class="{ 'is-loading': loading }" class="button">Verify</button>
            </div>
            <div v-else>
                <input v-model="phoneNumber" type="tel" placeholder="number" class="input">
                <button @click="sendVerificationCode" :class="{ 'is-loading': loading }" id="send-captcha" class="button">Send Code</button>
            </div>
            <div id="recaptcha-container"></div>
        </div> -->
        <p class="has-text-danger" v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </aside>
</template>

<script>
import { defineComponent } from 'vue'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import { RecaptchaVerifier } from '../firebase'
// import { signInWithPhoneNumber } from 'firebase/auth'

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
            // verificationCode: '',
            // confirmationResult: null
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
        },
        // async sendVerificationCode() {
        //     this.loading = true
        //     try {
        //         const appVerifier = new RecaptchaVerifier('send-captcha', {
        //             'size': 'normal',
        //             'callback': () => {
        //                 this.onSignInSubmit();
        //             }
        //         });
        //         this.confirmationResult = await signInWithPhoneNumber(auth, this.phoneNumber, appVerifier);
        //     } catch (error) {
        //         console.error('Error sending verification code:', error);
        //     }
        //     this.loading = false
        // },
        // async verifyCode() {
        //     this.loading = true
        //     try {
        //         const userCredential = await this.confirmationResult.confirm(this.verificationCode);
        //         const user = userCredential.user;
        //         console.log('Phone number signup successful:', user);
        //     } catch (error) {
        //         console.error('Error verifying code:', error);
        //     }
        //     this.loading = false
        // },
        // onSignInSubmit() {
        // }    
    }
})
</script>
