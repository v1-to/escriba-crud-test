<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
</script>

<template>
    <div class="screen">
        <TheNavbar></TheNavbar>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.screen {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;

    nav {
        height: 100vh;
        width: 15vw;
        background-color: #f2f2f2;
    }

    div.content {
        width: 85vw;
        height: 100vh;
    }
}
</style>