<template>
    <div class="container">
        <h2 class="page__title">Suppliers</h2>
        <div class="home-page__wrapper">
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
import { SuppliersList } from '../components/home';
import { Button } from '../components/shared';

const store = useOpplyStore();

const currentPage = ref(1);
const suppliersCount = ref(null);
const isAllLoaded = computed(() => currentPage.value >= Math.ceil(suppliersCount.value / 10));

const loadMore = async () => {
    currentPage.value = currentPage.value + 1;
    await store.fetchSuppliers(currentPage.value);
};

onBeforeMount(async () => {
    if (!!store.suppliers.length) return;


    const response = await store.fetchSuppliers(currentPage.value);

    suppliersCount.value = response.count;
});
</script>

<style scoped>
.home-page__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button__load-more {
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>