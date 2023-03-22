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

    div.content {
        width: 85vw;
        height: 100vh;
        padding: 20px;
    }
}

@media only screen and (max-width: 640px) {
    div.screen {
        flex-direction: column;

        div.content {
            width: 100vw;
        }
    }
}
</style>