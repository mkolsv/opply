<template>
    <div class="quotes__list">
        <Quote v-for="quote in quotes.list" :key="quote.id" :quote="quote" />
    </div>
</template>

<script setup lang="ts">

import { useOpplyStore } from '../../store';
import Quote from './Quote.vue';

const store = useOpplyStore();

const quotes = store.quotes;
</script>

<style scoped>
.quotes__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>