<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BaseToast from '@/components/BaseToast.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <DefaultLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </DefaultLayout>
  <BaseToast></BaseToast>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>