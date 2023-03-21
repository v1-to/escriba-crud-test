<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

defineProps({
    canSubmit: {
        type: Boolean,
        default: true
    }
})

defineEmits(['cancel', 'confirm'])
</script>

<template>
    <form>
        <slot></slot>
        <div class="options">
            <BaseButton label="Cancelar" color="#ff686b" @click="$emit('cancel')"></BaseButton>
            <BaseButton label="Confirmar" color="#84dcc6" @click="$emit('confirm')" :disabled="!canSubmit"></BaseButton>
        </div>
    </form>
</template>

<style scoped lang="scss">
div.options {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    :deep(button.button) {
        margin: 0 10px;
    }
}
</style>