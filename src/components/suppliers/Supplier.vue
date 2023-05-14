<template>
<div class="supplier__card">
    <h2 class="supplier__name">{{ supplier.name }}</h2>
    <p class="supplier__description">{{ supplier.description }}</p>
    <Button skin="secondary" @click="openSupplier">
        Show Details
    </Button>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Supplier } from '@/types';
import { Button } from '@/components/shared';

const props = defineProps<{ supplier: Supplier }>();
const router = useRouter();

const openSupplier = () => {
    router.push({ path: `/supplier/${props.supplier.id}` });
};
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
    font-size: 16px;
}

.supplier__description {
    color: var(--text-color-secondary);
    font-size: 14px;
}
</style>