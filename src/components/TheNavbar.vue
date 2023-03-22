<script setup lang="ts">
import NavbarLinkItem from '@/components/NavbarLinkItem.vue';
import { computed, ref } from 'vue';

const menuOpen = ref(false);
const menuText = computed(() => menuOpen.value ? "X" : "MENU");

function test() {
    console.log('TEST')
}
</script>

<template>
    <div class="menu-wrapper">
        <button class="responsive-menu" @click="menuOpen = !menuOpen">{{ menuText }}</button>
        <nav :class="[{ hidden: !menuOpen }]" @click="menuOpen = false">
            <NavbarLinkItem to="/" label="Home"></NavbarLinkItem>
            <NavbarLinkItem to="/person" label="Pessoas"></NavbarLinkItem>
            <NavbarLinkItem to="/product" label="Produtos"></NavbarLinkItem>
            <NavbarLinkItem to="/order" label="Pedidos"></NavbarLinkItem>
            <NavbarLinkItem to="/about" label="Sobre"></NavbarLinkItem>
        </nav>
    </div>
</template>

<style scoped lang="scss">
div.menu-wrapper {
    height: fit-content;
}

.responsive-menu {
    display: none;
}

nav {
    height: 100vh;
    width: 15vw;
    min-width: 200px;
    background-color: #f2f2f2;
}

@media only screen and (max-width: 640px) {
    .responsive-menu {
        display: flex;
        height: 50px;
        width: fit-content;
        min-width: 80px;
        border: none;
        margin: 5px;
        font-size: 20px;
        align-items: center;
        justify-content: center;
    }

    nav {
        width: 100vw;
        height: fit-content;

        &.hidden {
            display: none;

        }
    }
}
</style>