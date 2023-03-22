<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'lightgray'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])
</script>

<template>
    <button type="button" class="button" :style="{ backgroundColor: color }" @click.stop="$emit('click')"
        :disabled="disabled">
        <span>{{ label }}</span>
    </button>
</template>

<style scoped lang="scss">
button.button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    padding: 5px 10px;
    text-transform: lowercase;

    span {
        color: white;
        font-weight: bold;
    }

    &:disabled {
        filter: opacity(0.5);
    }
}
</style>