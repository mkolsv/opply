<template>
    <div class="tabs__content" v-if="selectedTitle === title">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const selectedTitle = inject('selectedTitle');
</script>

<style scoped>

</style>