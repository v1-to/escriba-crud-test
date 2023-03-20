<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    modelValue: String,
    value: String,
    label: String,
});
const emit = defineEmits(['update:modelValue'])
const model = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});
</script>

<template>
    <div class="input-wrapper">
        <span>{{ label }}</span>
        <input type="text" :placeholder="label" v-model="model" />
    </div>
</template>

<style scoped lang="scss">
div.input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    span {
        font-size: 12px;
    }

    input {
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