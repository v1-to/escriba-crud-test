<script setup lang="ts">
import { HexLightColorEnum } from '@/helpers/color';
import { accessInnerProperty } from '@/helpers/utils'
import BaseButton from './BaseButton.vue'

defineProps({
    items: {
        type: Array<any>,
        required: true,
    },
    fields: {
        type: Array<string>,
        default: []
    },
    labels: {
        type: Array<string>,
        default: []
    },
    canDelete: {
        type: Boolean,
        default: false
    },
    canUpdate: {
        type: Boolean,
        default: false
    },
    canAdd: {
        type: Boolean,
        default: false
    }
});

defineEmits(['update', 'remove', 'add'])
</script>

<template>
    <div class="table-wrapper">
        <table>
            <tr>
                <th v-for="(_, index) in fields" :key="index"> {{ labels[index] }}</th>
                <th v-if="canDelete || canUpdate">OPÇÕES</th>
            </tr>
            <tr v-for="(item, index) in items" :key="index">
                <td v-for="(field, index) in fields" :key="index">{{ accessInnerProperty(field, item) }}</td>
                <td v-if="canDelete || canUpdate" class="options" width="190px">
                    <BaseButton v-if="canUpdate" label="Editar" :color="HexLightColorEnum.BLUE"
                        @click="$emit('update', item)" />
                    <BaseButton v-if="canDelete" label="Excluir" :color="HexLightColorEnum.RED"
                        @click="$emit('remove', item)" />
                </td>
            </tr>
        </table>
    </div>
    <div class="add-new">
        <BaseButton v-if="canAdd" label="+ Adicionar Novo" :color="HexLightColorEnum.GREEN" @click="$emit('add')" />
    </div>
</template>

<style scoped lang="scss">
div.table-wrapper {
    overflow-x: auto;

    table {
        width: 100%;

        th,
        td {
            text-align: center;
            border: 1px solid gray;
            padding: 5px;

            :deep(button.button) {
                margin: 0 10px;
            }
        }

        th {
            background-color: #2c3e50;
            color: white;
        }
    }
}

div.add-new {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>