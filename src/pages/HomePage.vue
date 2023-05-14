<template>
    <div class="home-page__wrapper container">
        <SuppliersList />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useOpplyStore } from '../store';
import { SuppliersList } from '../components/home';

const store = useOpplyStore();

onBeforeMount(async () => {
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