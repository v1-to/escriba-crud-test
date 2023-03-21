<script setup lang="ts">
import BaseForm from '@/components/BaseForm.vue';
import BaseInput from '@/components/BaseInput.vue';
import { usePersonStore, type Person } from '@/stores/person';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = usePersonStore();
const route = useRoute()
const router = useRouter()

const form: Person = reactive({
    id: undefined,
    nome: '',
    cpf: '',
    dataNascimento: '',
})

onMounted(() => {
    if (route.params.id)
        store.read(route.params.id as unknown as number).then((res) => {
            Object.assign(form, res)
        })
})

function submit() {
    if (route.params.id) store.update(form).then(() => router.push({ name: 'person-list' }))
    else store.create(form).then(() => router.push({ name: 'person-list' }))
}

function cancel() {
    router.push({ name: 'person-list' })
}
</script>

<template>
    <BaseForm @cancel="cancel" @confirm="submit">
        <BaseInput v-model="form.nome" label="Nome"></BaseInput>
        <BaseInput v-model="form.cpf" label="CPF"></BaseInput>
        <BaseInput v-model="form.dataNascimento" label="Data de Nascimento"></BaseInput>
    </BaseForm>
</template>

<style scoped lang="scss">
form {
    :deep(div.input-wrapper) {
        margin-top: 10px;
    }
}
</style>