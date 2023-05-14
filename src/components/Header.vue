<template>
    <header class="header">
        <h1 class="header__title">Opply</h1>

        <nav v-if="store.isAuthorized" class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/">
                        Supplier
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/quotes">
                        Quotes
                    </router-link>
                </li>
            </ul>
        </nav>

        <Button
            v-if="store.isAuthorized"
            class="header__button--log-out"
            skin="secondary"
            @click="logOut"
        >
            Log Out
        </Button>
    </header>
</template>

<script setup lang="ts">
import Button from './shared/Button.vue';
import { useOpplyStore } from '../store';

const store = useOpplyStore();

const logOut = () => {
    localStorage.removeItem('token');
    location.reload();

};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    background-color: var(--background-color-secondary);
    padding: 24px;
}

.header__title {
    font-size: 16px;
    color: var(--text-color-secondary);
}

.nav__list {
    display: flex;
    gap: 24px;
    padding-left: 0;
}

.header__button--log-out {
    font-size: 12px;
}
</style>