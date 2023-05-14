<template>
    <div class="container">
        <h2 class="page__title">Suppliers</h2>
        <div class="suppliers__wrapper">
            <SuppliersList />

            <Button v-if="!isAllLoaded" class="button__load-more" skin="primary" @click="loadMore">
                Load More
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useOpplyStore } from '../store';
import { SuppliersList } from '../components/suppliers';
import { Button } from '../components/shared';

const store = useOpplyStore();

const currentPage = computed(() => Math.ceil(store.suppliers.list.length / 10));
const suppliersCount = computed(() => store.suppliers.count);
const isAllLoaded = computed(() => currentPage.value >= Math.ceil(suppliersCount.value / 10));

const loadMore = async () => {
    await store.fetchSuppliers(currentPage.value + 1);
};

onBeforeMount(async () => {
    if (!!store.suppliers.list.length) return;

    await store.fetchSuppliers(1);
});
</script>

<style scoped>
.suppliers__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>