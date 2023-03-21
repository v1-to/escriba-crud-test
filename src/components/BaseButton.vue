<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'lightgray'
    }
})

defineEmits(['click'])
</script>

<template>
    <button type="button" class="button" :style="{ backgroundColor: color }" @click.stop="$emit('click')">
        <span>{{ label }}</span>
    </button>
</template>

<style scoped lang="scss">
button.button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    padding: 0.75em 2em;
    text-transform: lowercase;

    span {
        color: white;
        font-weight: bold;
    }
}
</style>