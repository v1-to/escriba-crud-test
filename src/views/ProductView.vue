<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore, type Product } from '@/stores/product';
import BaseTable from '@/components/BaseTable.vue';
import { useRouter } from 'vue-router';
import BaseViewTitle from '@/components/BaseViewTitle.vue';
import BaseTableFilter from '@/components/BaseTableFilter.vue';
import { onMounted } from 'vue';

const fields = [
    { label: "ID", value: 'id' },
    { label: "Descrição", value: 'descricao' },
    { label: "Valor Unitário", value: 'valoUnitario' },
]

const router = useRouter()
const store = useProductStore();
onMounted(() => store.list());

const { items } = storeToRefs(store)

function update({ id }: Product) {
    router.push({ name: 'product-update', params: { id } })
}
function remove(product: Product) {
    store.remove(product).then(() => store.list())
}
function add() {
    router.push({ name: 'product-create', params: { id: NaN } })
}
function filter(value: Partial<Product>) {
    store.list(value);
}
</script>

<template>
    <main>
        <BaseViewTitle label="Lista de Produtos"></BaseViewTitle>
        <BaseTableFilter :fields="fields" @filter="filter" @reset="store.list()"></BaseTableFilter>
        <BaseTable :items="items" :fields="['id', 'descricao', 'valoUnitario']"
            :labels="['ID', 'DESCRIÇÃO', 'VALOR UNITÁRIO']" :canDelete="true" :canUpdate="true" :canAdd="true"
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