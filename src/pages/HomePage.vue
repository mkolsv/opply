<template>
    <div class="container">
        <h2 class="page__title">Suppliers</h2>
        <div class="home-page__wrapper">
            <SuppliersList />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useOpplyStore } from '../store';
import { SuppliersList } from '../components/home';

const store = useOpplyStore();

onBeforeMount(async () => {
    if (!!store.suppliers.length) return;

    await store.fetchSuppliers(1);
});
</script>

<style scoped>
.home-page__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 24px;
}
</style>