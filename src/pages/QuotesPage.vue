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
import { useOpplyStore } from '../store';
import { computed, onBeforeMount, ref } from 'vue';
import { QuotesList } from '../components/quotes';
import { Button } from '../components/shared';

const store = useOpplyStore();

const currentPage = ref(1);
const quotesCount = ref(null);
const isAllLoaded = computed(() => currentPage.value >= Math.ceil(quotesCount.value / 10));

const loadMore = async () => {
    currentPage.value = currentPage.value + 1;
    await store.fetchQuotes(currentPage.value);
};

onBeforeMount(async () => {
    if (!!store.quotes.length) return;

    const response = await store.fetchQuotes(1);

    quotesCount.value = response.count;
});
</script>

<style scoped>
.quotes__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>