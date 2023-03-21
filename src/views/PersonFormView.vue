<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ThePersonForm from '@/components/ThePersonForm.vue';
import BaseViewTitle from '@/components/BaseViewTitle.vue';

const route = useRoute();

const title = computed(() => {
    if (route.params.id && !isNaN(Number(route.params.id))) return 'Editar Pessoa';
    return 'Adicionar Pessoa';
})
</script>

<template>
    <main>
        <BaseViewTitle :label="title"></BaseViewTitle>
        <ThePersonForm :id="Number(route.params.id)" />
    </main>
</template>