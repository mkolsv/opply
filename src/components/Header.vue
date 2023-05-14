<template>
    <header class="header">
        <h1 class="header__title">Opply</h1>

        <nav v-if="store.isAuthorized">
            <ul class="nav__list">
                <li
                    class="nav__item"
                    v-for="link in headerNavLinks"
                    :key="link.name"
                >
                    <router-link class="nav__link" :to="link.to">
                        {{ link.name }}
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
import { Button } from '@/components/shared';
import { useOpplyStore } from '@/store';

const store = useOpplyStore();

const headerNavLinks = [
    { name: 'Suppliers', to: '/' },
    { name: 'Quotes', to: '/quotes' },
];

const logOut = () => {
    localStorage.removeItem('token');
    location.reload();

};
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
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
    list-style: none;
}

.nav__link {
    color: var(--link-color-secondary);
}

.nav__link.router-link-active {
    border-bottom: 1px solid var(--border-color-secondary);
}

.header__button--log-out {
    font-size: 12px;
}
</style>