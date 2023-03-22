<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TheProductForm from '@/components/TheProductForm.vue';
import BaseViewTitle from '@/components/BaseViewTitle.vue';

const route = useRoute();

const title = computed(() => {
    if (route.params.id && !isNaN(Number(route.params.id))) return 'Editar Produto';
    return 'Adicionar Produto';
})
</script>

<template>
    <main>
        <BaseViewTitle :label="title"></BaseViewTitle>
        <TheProductForm :id="Number(route.params.id)" />
    </main>
</template>