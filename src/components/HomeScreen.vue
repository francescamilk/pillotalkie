<template>
    <div>
        <h3>Home</h3>
        <CurrentUser>
            <!-- AUTH3. v-slot receives 'user' from the parent component -->
            <template v-slot:user="{user}">
                <div v-if="user">
                    <!-- AUTH4. 'user' is bind to child component -->
                    <UserProfile :user="user" />
                </div>
                <LoginBtn v-else />
            </template>
        </CurrentUser>
    </div>
</template>

<script>
import LoginBtn from './LoginBtn'
import CurrentUser from './CurrentUser'
import UserProfile from './UserProfile.vue'

export default {
    components: {
        LoginBtn,
        CurrentUser,
        UserProfile
    }
}
</script>
