<template>
    <div class="suppliers__list">
        <Supplier v-for="supplier in suppliers.list" :key="supplier.id" :supplier="supplier" />
    </div>
</template>

<script setup lang="ts">
import { useOpplyStore } from '../../store';
import Supplier from './Supplier.vue';

const store = useOpplyStore();

const suppliers = store.suppliers;
</script>

<style scoped>
.suppliers__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
</style>