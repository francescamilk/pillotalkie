<template>
    <div>
        <h3>Home</h3>
        <CurrentUser>
            <template v-slot:user="{user}">
                <div v-if="user">
                    <UserProfile :user="user" />
                    <ChatList :uid="user.uid" />
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
import ChatList from './ChatList.vue'

export default {
    components: {
        LoginBtn,
        CurrentUser,
        UserProfile,
        ChatList
    }
}
</script>
