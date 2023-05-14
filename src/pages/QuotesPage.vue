<template>
    <div class="container">
        <h2 class="page__title">Quotes</h2>

        <div class="quotes__wrapper">
            <QuotesList />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOpplyStore } from '../store';
import { onBeforeMount } from 'vue';
import { QuotesList } from '../components/quotes';

const store = useOpplyStore();

onBeforeMount(async () => {
    if (!!store.suppliers.length) return;

    await store.fetchQuotes(1);
});
</script>

<style scoped>
.quotes__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>