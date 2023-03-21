<script setup lang="ts">
import { onMounted, ref, watch, type PropType } from "vue";
import { validateCPF } from "@/helpers/validation";

const errorMessage = ref('');

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

onMounted(() => validate());

function validate() {
    errorMessage.value = ''
    if (props.isRequired) {
        if (!props.data) errorMessage.value = 'O campo é obrigatório';
        return emit('update:isValid', !!props.data);
    }
    if (props.type === 'cpf') {
        const isCPFOk = validateCPF(props.data);
        if (!isCPFOk) errorMessage.value = 'CPF inválido';
        return emit('update:isValid', isCPFOk);
    }
}

const maxLength = props.type === 'cpf' ? 14 : Infinity;

</script>

<template>
    <div :class="['input-wrapper', { 'is-invalid': !isValid }]">
        <span>{{ label }}</span>
        <span v-if="errorMessage" class="error-message">({{ errorMessage }})</span>
        <input type="text" :placeholder="label" :value="data"
            @input="$event => $emit('update:data', ($event.target as HTMLInputElement).value)" :maxlength="maxLength" />
    </div>
</template>

<style scoped lang="scss">
div.input-wrapper {
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