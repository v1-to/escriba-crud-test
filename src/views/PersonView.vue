<script setup lang="ts">
import { usePersonStore } from '@/stores/person';

const store = usePersonStore();
store.list();
</script>

<template>
    PERSON
</template>

<style scoped lang="scss"></style>