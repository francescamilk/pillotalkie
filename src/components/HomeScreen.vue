<template>
    <div>
        <h3>Home</h3>

        <LoginBtn />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginBtn from './LoginBtn'

export default defineComponent({    
    components: {
        LoginBtn
    }
})
</script>