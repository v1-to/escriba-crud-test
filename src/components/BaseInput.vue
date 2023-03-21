<script setup lang="ts">
import { watch, type PropType } from "vue";
import { validateCPF } from "@/helpers/validation";

type BaseInputType = 'cpf' | 'date' | 'text';
const props = defineProps({
    data: {
        type: String,
        required: true,
    },
    isValid: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        required: true,
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<BaseInputType>,
        default: 'text'
    }
});

const emit = defineEmits(['update:data', 'update:isValid']);

watch(() => props.data, () => validate());

function validate() {
    if (props.isRequired) return emit('update:isValid', !!props.data);
    if (props.type === 'cpf') return emit('update:isValid', validateCPF(props.data));
}

const maxLength = props.type === 'cpf' ? 14 : Infinity;

</script>

<template>
    <div :class="['input-wrapper', { 'is-invalid': !isValid }]">
        <span>{{ label }}</span>
        <input type="text" :placeholder="label" :value="data" @input="$event => $emit('update:data', $event.target.value)"
            :maxlength="maxLength" />
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

    &.is-invalid {
        span {
            color: red;
        }

        input {
            border-color: red;
        }
    }
}
</style>