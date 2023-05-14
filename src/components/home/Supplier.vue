<template>
<div class="supplier__card">
    <a class="supplier__name">{{ supplier.name }}</a>
    <p class="supplier__description">{{ supplier.description }}</p>
</div>
</template>

<script setup lang="ts">
import { Supplier } from '../../types';

defineProps<{ supplier: Supplier }>();
</script>

<style scoped>
.supplier__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    width: 300px;
    padding: 12px;
    background-color: var(--background-color-accent);
}

.supplier__name {
    color: var(--link-color-secondary);
    text-transform: uppercase;
}

.supplier__description {
    color: var(--text-color-secondary);
    font-size: 14px;
}
</style>