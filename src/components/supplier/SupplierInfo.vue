<template>
    <section class="supplier-info__card container">
        <h2 class="supplier-info__name">{{ supplier.name }}</h2>
        <p>{{ supplier.description }}</p>
        <span>id: {{ supplier.id }}</span>
    </section>
</template>

<script setup lang="ts">
import { useOpplyStore } from '@/store';

const store = useOpplyStore();
const supplier = store.supplier;
</script>

<style scoped>
.supplier-info__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    width: 300px;
    padding: 12px;
    background-color: var(--background-color-accent);
    color: var(--text-color-secondary);
    text-align: center;
}

.supplier-info__name {
    font-size: 20px;
}
</style>