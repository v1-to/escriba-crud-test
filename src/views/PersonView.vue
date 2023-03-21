<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePersonStore, type Person } from '@/stores/person';
import BaseTable from '@/components/BaseTable.vue';
import { useRouter } from 'vue-router';
import BaseViewTitle from '@/components/BaseViewTitle.vue';

const router = useRouter()
const store = usePersonStore();
store.list();
const { items } = storeToRefs(store)

function update({ id }: Person) {
    router.push({ name: 'person-update', params: { id } })
}
function remove(person: Person) {
    store.remove(person).then(() => store.list())
}
function add() {
    router.push({ name: 'person-create', params: { id: NaN } })
}
</script>

<template>
    <main>
        <BaseViewTitle label="Lista de Pessoas"></BaseViewTitle>
        <BaseTable :items="items" :fields="['id', 'nome', 'cpf', 'dataNascimento']"
            :labels="['ID', 'Nome', 'CPF', 'DATA DE NASCIMENTO']" :canDelete="true" :canUpdate="true" :canAdd="true"
            @update="update" @remove="remove" @add="add" />
    </main>
</template>