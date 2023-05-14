<template>
    <Supplier v-for="supplier in suppliers" :key="supplier.id" :supplier="supplier" />
</template>

<script setup lang="ts">
import { useOpplyStore } from '../../store';
import Supplier from './Supplier.vue';

const store = useOpplyStore();

const suppliers = store.suppliers;
</script>

<style scoped>

</style>