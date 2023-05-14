<template>
    <div class="quote__card">
        <h2 class="quote__title">{{ quote.title }}</h2>
        <p class="quote__amount"><span class="quote__label">Amount:</span>{{ quote.amount }} £</p>
        <p>
            <span class="quote__label">Supplier:</span>
            <router-link
                class="quote__supplier-link"
                v-if="quote.supplier_id"
                :to="`/supplier/${quote.supplier_id}`"
            >
                {{ quote.supplier_id }}
            </router-link>
            <span class="quote__supplier--unavailable" v-else>(not available)</span>
        </p>
        <p><span class="quote__label">Created:</span> {{ formattedData }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Quote } from '../../types';

const props = defineProps<{ quote: Quote }>();

const formattedData = computed(() => {
    const data = new Date(props.quote.created);
    return data.toLocaleDateString("en-UK");
});
</script>

<style scoped>
.quote__card {
    display: grid;
    grid-template-columns: 3fr repeat(3, 1fr);
    border-radius: 2px;
    padding: 12px;
    background-color: var(--background-color-accent);
    color: var(--text-color-secondary);
}

.quote__title {
    font-size: 16px;
}

.quote__label {
    font-weight: 600;
    padding-right: 8px;
}

.quote__supplier-link {
    color: var(--text-color-secondary);
    text-decoration: underline;
}

.quote__supplier--unavailable {
    font-size: 12px;
    font-style: italic;
}
</style>