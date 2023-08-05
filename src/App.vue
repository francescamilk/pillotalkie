<template>
    <div id="app" class="container">
        <header>
            <h1>PILL'O'TALKIE</h1>
            <p>Pills of pillow talk 💖</p>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
