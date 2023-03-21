<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BaseToast from '@/components/BaseToast.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
  <BaseToast></BaseToast>
</template>
