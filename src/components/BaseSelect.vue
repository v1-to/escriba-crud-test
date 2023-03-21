<script setup lang="ts">
import type { PropType } from 'vue';

export type SelectItem = { label: string, value: string | number };

defineProps({
    options: {
        type: Array as PropType<SelectItem[]>,
        required: true,
    },
    selected: {
        type: [String, Number]
    },
    label: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="select-wrapper">
        <span>{{ label }}</span>
        <select :value="selected" @input="$event => $emit('update:selected', $event.target.value)">
            <option disabled value="">Selecione um item</option>
            <option :value="value" v-for="({ label, value }, index) in options" :key="index">{{ label }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
div.select-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    span {
        font-size: 12px;

        &.error-message {
            margin-left: 5px;
        }
    }

    select {
        height: 45px;
        width: 100%;
        font-size: 20px;
        border-radius: 8px;
        background-color: #f2f2f2;
        color: #2c3e50;
        padding: 0 10px;
        border: 1px solid #e6e6e6;

        &:focus {
            outline: none;
        }
    }
}
</style>