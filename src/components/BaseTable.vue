<script setup lang="ts">
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
    }
});

defineEmits(['update', 'remove'])
</script>

<template>
    <table>
        <tr>
            <th v-for="(_, index) in fields" :key="index"> {{ labels[index] }}</th>
            <th v-if="canDelete || canUpdate">OPÇÕES</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
            <td v-for="(field, index) in fields" :key="index">{{ item[field] }}</td>
            <td v-if="canDelete || canUpdate" class="options">
                <button v-if="canUpdate" @click="$emit('update', item)">UPDATE</button>
                <button v-if="canDelete" @click="$emit('remove', item)">DELETE</button>
            </td>
        </tr>
    </table>
</template>

<style scoped lang="scss">
table {
    width: 100%;

    th,
    td {
        text-align: center;
        border: 1px solid gray;
        padding: 5px;
    }

    th {
        background-color: #2c3e50;
        color: white;
    }
}
</style>