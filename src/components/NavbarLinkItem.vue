<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    label: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true
    }
})
</script>

<template>
    <RouterLink :to="to" class="link">{{ label }}</RouterLink>
</template>

<style scoped lang="scss">
a.link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 25px;
    width: 100%;
    height: 50px;

    &.router-link-active {
        background-color: #e6e6e6;
    }

    &:hover {
        background-color: #d9d9d9;
    }
}
</style>