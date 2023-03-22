<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOrderStore, type Order } from '@/stores/order';
import BaseTable from '@/components/BaseTable.vue';
import { useRouter } from 'vue-router';
import BaseViewTitle from '@/components/BaseViewTitle.vue';
import BaseTableFilter from '@/components/BaseTableFilter.vue';
import { onMounted } from 'vue';

const fields = [
    { label: "ID", value: 'id' },
    { label: "Cliente", value: 'cliente.nome' },
    { label: "Data", value: 'dataEmissao' },
    { label: "Total", value: 'valorTotal' },
]

const router = useRouter()
const store = useOrderStore();
onMounted(() => store.list());

const { items } = storeToRefs(store)

function update({ id }: Order) {
    router.push({ name: 'order-update', params: { id } })
}
function remove(order: Order) {
    store.remove(order).then(() => store.list())
}
function add() {
    router.push({ name: 'order-create', params: { id: NaN } })
}
function filter(value: Partial<Order>) {
    store.list(value);
}
</script>

<template>
    <main>
        <BaseViewTitle label="Lista de Pedidos"></BaseViewTitle>
        <BaseTableFilter :fields="fields" @filter="filter" @reset="store.list()"></BaseTableFilter>
        <BaseTable :items="items" :fields="['id', 'cliente.nome', 'dataEmissao', 'valorTotal']"
            :labels="['ID', 'CLIENTE', 'DATA', 'TOTAL']" :canDelete="true" :canUpdate="true" :canAdd="true" @update="update"
            @remove="remove" @add="add" />
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