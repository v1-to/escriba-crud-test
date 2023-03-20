<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <span class="title">{{ label }}</span>
</template>

<style scoped lang="scss">
span.title {
    font-size: 30px;
}
</style>