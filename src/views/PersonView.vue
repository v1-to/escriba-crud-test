<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePersonStore, type Person } from '@/stores/person';
import BaseTable from '@/components/BaseTable.vue';
import { useRouter } from 'vue-router';
import BaseViewTitle from '@/components/BaseViewTitle.vue';
import BaseTableFilter from '@/components/BaseTableFilter.vue';
import { onMounted } from 'vue';

const fields = [
    { label: "ID", value: 'id' },
    { label: "Nome", value: 'nome' },
    { label: "CPF", value: 'cpf' },
    { label: "Data de Nascimento", value: 'dataNascimento' }
]

const router = useRouter()
const store = usePersonStore();
onMounted(() => store.list());

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
function filter(value: Partial<Person>) {
    store.list(value);
}
</script>

<template>
    <main>
        <BaseViewTitle label="Lista de Pessoas"></BaseViewTitle>
        <BaseTableFilter :fields="fields" @filter="filter" @reset="store.list()"></BaseTableFilter>
        <BaseTable :items="items" :fields="['id', 'nome', 'cpf', 'dataNascimento']"
            :labels="['ID', 'Nome', 'CPF', 'DATA DE NASCIMENTO']" :canDelete="true" :canUpdate="true" :canAdd="true"
            @update="update" @remove="remove" @add="add" />
    </main>
</template>

<style scoped lang="scss">
main {
    :deep(div.filter-wrapper) {
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>