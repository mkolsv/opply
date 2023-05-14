<template>
    <div class="container">
        <h2 class="page__title">Quotes</h2>

        <div class="quotes__wrapper">
            <QuotesList />

            <Button v-if="!isAllLoaded" class="button__load-more" skin="primary" @click="loadMore">
                Load More
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { useOpplyStore } from '@/store';
import { QuotesList } from '@/components/quotes';
import { Button } from '@/components/shared';

const store = useOpplyStore();

const currentPage = computed(() => Math.ceil(store.quotes.list.length / 10));
const quotesCount = computed(() => store.quotes.count);
const isAllLoaded = computed(() => currentPage.value >= Math.ceil(quotesCount.value / 10));

const loadMore = async () => {
    await store.fetchQuotes(currentPage.value + 1);
};

onBeforeMount(async () => {
    if (!!store.quotes.list.length) return;

    await store.fetchQuotes(1);
});
</script>

<style scoped>
.quotes__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>