<template>
    <Header />
    <AuthPage v-if="!isAuthorized" />
    <HomePage v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Header from './components/Header.vue';
import AuthPage from './components/auth/AuthPage.vue';
import HomePage from "./components/home/HomePage.vue";

const isAuthorized = computed(() => {
    return !!localStorage.getItem('token');
});
</script>

<style scoped>
</style>
