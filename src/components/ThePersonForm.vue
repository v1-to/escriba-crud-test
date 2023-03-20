<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import { usePersonStore } from '@/stores/person';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const store = usePersonStore();

const form = reactive({
    id: undefined,
    nome: '',
    cpf: '',
    dataNascimento: '',
})

const route = useRoute()

if (route.params.id)
    store.read(route.params.id as unknown as number).then((res) => {
        Object.assign(form, res)
    })
</script>

<template>
    <form>
        <BaseInput v-model="form.nome" label="Nome"></BaseInput>
        <BaseInput v-model="form.cpf" label="CPF"></BaseInput>
        <BaseInput v-model="form.dataNascimento" label="Data de Nascimento"></BaseInput>
    </form>
</template>

<style scoped lang="scss">
form {
    :deep(div.input-wrapper) {
        margin-top: 10px;
    }
}
</style>