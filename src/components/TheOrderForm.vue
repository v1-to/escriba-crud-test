<script setup lang="ts">
import BaseForm from '@/components/BaseForm.vue';
import BaseInput from '@/components/BaseInput.vue';
import { useOrderStore, type Order } from '@/stores/order';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useOrderStore();
const route = useRoute()
const router = useRouter()

const form: Order = reactive({
    id: undefined,
})
/*const formValidation: Record<keyof Pick<Order, 'id' | 'nome'>, boolean> = reactive({
})*/

onMounted(() => {
    if (route.params.id)
        store.read(route.params.id as unknown as number).then((res) => {
            Object.assign(form, res)
        })
})

function submit() {
    if (route.params.id) store.update(form).then(() => router.push({ name: 'order-list' }))
    else store.create(form).then(() => router.push({ name: 'order-list' }))
}

function cancel() {
    router.push({ name: 'order-list' })
}
</script>

<template>
    <BaseForm @cancel="cancel" @confirm="submit" :canSubmit="true">
    </BaseForm>
</template>

<style scoped lang="scss">
form {
    :deep(div.input-wrapper) {
        margin-top: 10px;
    }
}
</style>