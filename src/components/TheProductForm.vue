<script setup lang="ts">
import BaseForm from '@/components/BaseForm.vue';
import BaseInput from '@/components/BaseInput.vue';
import { useProductStore, type Product } from '@/stores/product';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useProductStore();
const route = useRoute()
const router = useRouter()

const form: Product = reactive({
    id: undefined,
    descricao: '',
    valoUnitario: NaN,
})
const formValidation: Record<keyof Pick<Product, 'descricao' | 'valoUnitario'>, boolean> = reactive({
    descricao: false,
    valoUnitario: false,
})

onMounted(() => {
    if (route.params.id)
        store.read(route.params.id as unknown as number).then((res) => {
            Object.assign(form, res)
        })
})

function submit() {
    if (route.params.id) store.update(form).then(() => router.push({ name: 'product-list' }))
    else store.create(form).then(() => router.push({ name: 'product-list' }))
}

function cancel() {
    router.push({ name: 'product-list' })
}
</script>

<template>
    <BaseForm @cancel="cancel" @confirm="submit" :canSubmit="formValidation.descricao && formValidation.valoUnitario">
        <BaseInput v-model:data="form.descricao" v-model:isValid="formValidation.descricao" label="Descrição" type="text"
            :isRequired="true"></BaseInput>
        <BaseInput v-model:data="form.valoUnitario" v-model:isValid="formValidation.valoUnitario" label="Valor Unitário"
            :isRequired="true" type="number"></BaseInput>
    </BaseForm>
</template>

<style scoped lang="scss">
form {
    :deep(div.input-wrapper) {
        margin-top: 10px;
    }
}
</style>