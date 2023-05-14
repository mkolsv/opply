<template>
    <Quote v-for="quote in quotes" :key="quote.id" :quote="quote" />
</template>

<script setup lang="ts">

import { useOpplyStore } from '../../store';
import Quote from './Quote.vue';

const store = useOpplyStore();

const quotes = store.quotes;
</script>

<style scoped>

</style>