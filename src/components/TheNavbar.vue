<script setup lang="ts">
import NavbarLinkItem from '@/components/NavbarLinkItem.vue';
</script>

<template>
    <nav>
        <NavbarLinkItem to="/" label="Home"></NavbarLinkItem>
        <NavbarLinkItem to="/person" label="Pessoas"></NavbarLinkItem>
        <NavbarLinkItem to="/product" label="Produtos"></NavbarLinkItem>
        <NavbarLinkItem to="/order" label="Pedidos"></NavbarLinkItem>
        <NavbarLinkItem to="/about" label="Sobre"></NavbarLinkItem>
    </nav>
</template>

<style scoped lang="scss"></style>