<template>
    <div>
        <h2 class="page__title">Info about supplier</h2>

        <SupplierInfo v-if="!isLoading" />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useOpplyStore } from '../store';
import { SupplierInfo } from '../components/supplier';

const store = useOpplyStore();
const route = useRoute();

const isLoading = ref(true);

onBeforeMount(async () => {
    await store.fetchSupplier(route.params.id);
    isLoading.value = false;
});
</script>

<style scoped>

</style>