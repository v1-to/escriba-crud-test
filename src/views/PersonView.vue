<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePersonStore } from '@/stores/person';
import BaseTable from '@/components/BaseTable.vue';

const store = usePersonStore();
store.list();
const { items } = storeToRefs(store)

function update(res) {
    console.log({ ...res })
}
function remove(res) {
    console.log({ ...res })
}
</script>

<template>
    <BaseTable :items="items" :fields="['id', 'nome', 'cpf', 'dataNascimento']"
        :labels="['ID', 'Nome', 'CPF', 'DATA DE NASCIMENTO']" :canDelete="true" :canUpdate="true" @update="update"
        @remove="remove" />
</template>

<style scoped lang="scss"></style>