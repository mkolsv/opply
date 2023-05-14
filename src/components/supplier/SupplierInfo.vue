<template>
    <section class="supplier__info container">
        <p>Info about supplier:</p>
        <h2 class="supplier__name">Name: {{ supplier.name }}</h2>
        <p>Description: {{ supplier.description }}</p>
        <span>id: {{ supplier.id }}</span>
    </section>
</template>

<script setup lang="ts">
import { useOpplyStore } from '../../store';

const store = useOpplyStore();
const supplier = store.supplier;
console.log(supplier.name)
</script>

<style scoped>
.supplier__name {
    font-size: 20px;
}
</style>