<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TheOrderForm from '@/components/TheOrderForm.vue';
import BaseViewTitle from '@/components/BaseViewTitle.vue';

const route = useRoute();

const title = computed(() => {
    if (route.params.id && !isNaN(Number(route.params.id))) return 'Editar Pedido';
    return 'Adicionar Pedido';
})
</script>

<template>
    <main>
        <BaseViewTitle :label="title"></BaseViewTitle>
        <TheOrderForm :id="Number(route.params.id)" />
    </main>
</template>