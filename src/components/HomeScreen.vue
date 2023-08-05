<template>
    <div>
        <h3>Home</h3>

        <CurrentUser>
            <template v-slot:user="{user}">
                <div v-if="user">
                    <p>Hi {{ user.uid }}</p>
                </div>
                <LoginBtn v-else />
            </template>
        </CurrentUser>
    </div>
</template>

<script>
import LoginBtn from './LoginBtn'
import CurrentUser from './CurrentUser'

export default {
    components: {
        LoginBtn,
        CurrentUser
    }
}
</script>