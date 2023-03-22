<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect, { type SelectItem } from '@/components/BaseSelect.vue';
import { ref, type PropType } from 'vue';
import { HexLightColorEnum } from '@/helpers/color';

defineProps({
    fields: {
        type: Array as PropType<SelectItem[]>,
        required: true,
    }
})

const emit = defineEmits(['filter', 'reset'])
const selected = ref<string>('')
const data = ref<string>('')

function filter() {
    emit('filter', { [selected.value]: data.value })
}
</script>

<template>
    <div class="filter-wrapper">
        <BaseSelect :options="fields" v-model:selected="selected" label="Filtrar pela coluna"></BaseSelect>
        <BaseInput v-model:data="data" label="Busca"></BaseInput>
        <BaseButton label="Filtrar" :color="HexLightColorEnum.BLUE" @click="filter"></BaseButton>
        <BaseButton label="Limpar" labelColor="black" @click="$emit('reset')">
        </BaseButton>
    </div>
</template>

<style scoped lang="scss">
div.filter-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    :deep(div.select-wrapper),
    :deep(div.input-wrapper) {
        width: 40%;
    }

    :deep(button.button) {
        width: 8%;
        height: 3rem;
    }
}
</style>